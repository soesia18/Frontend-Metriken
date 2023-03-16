/// <reference path="..\..\..\Modules\_refs\BM.System\Web\bm.system.d.ts"/>

import reqmod = require("module");
import Common = require("Core/common");
import CountlyLib = require("./Libs/countly/countly-lib");
import Forms = require("Core/forms-core");
import $ = require("jquery");

let Countly: any = CountlyLib || {};

interface IConfig {
	AppKey: String;
	Url: String;
}

export function create(app: Common.IApplication, vc: Common.IViewContext, p: JQuery) {
	
	// doesnt work in actual project, cause of the global settings
	//let Countly: any = CountlyLib || {};
	//window.Countly = Countly;

	//Init Countly
	Countly.q = Countly.q || [];

	//Consider the consent of the user
	Countly.require_consent = true;

	//provide countly initialization parameters
	const config: IConfig = <IConfig>reqmod.config();

	console.log(config);

	// Set the app key and url, which are required parameters
	Countly.app_key = config.AppKey;
	Countly.url = config.Url;

	// Set the feature which should be tracked
	Countly.q.push(['group_features', {
		all: ['sessions', 'events', 'views', 'scrolls', 'clicks', 'forms', 'crashes', 'attribution', 'users', 'star-rating', 'location', 'apm', 'feedback', 'remote-config'],
		activity: ["sessions", "events", "views"],
		interaction: ["scrolls", "clicks", "forms"]
	}]);

	Countly.q.push(['track_sessions']);
	// exclude pageview, because it is tracked manually
	// Countly.q.push(['track_pageview']);
	Countly.q.push(['track_clicks']);
	Countly.q.push(['track_scrolls']);
	Countly.q.push(['track_errors']);
	Countly.q.push(['track_links']);
	Countly.q.push(['track_forms']);
	Countly.q.push(['collect_from_forms']);
	Countly.q.push(['enable_feedback', { 'popups': ['62de785f1779a900806e58d4'] }]);

	// Check if user already gave consent
	if (typeof (localStorage) !== "undefined") {
		let consents: any = localStorage.getItem("consents");

		if (consents) {
			Countly.q.push(['add_consent', JSON.parse(consents)]);

		} else {
			createBanner(app, vc, p);
		}
	} else {
		console.log("Not supported");
	}

	// Initialize Countly
	function init() {
		Countly.init();
	}

	init();
	//console.log(Countly.features);

	// To track buttons, ctl, view- and tab-changes in a loop
	setTimeout(() => {
		checkButton();
		checkCtl();
		checkViewChange(app);
		checkTab();
	}, 0);
}

// Push button tracking to Countly
function checkButton() {

	// Get the original button function
	const origBtn = Forms.builder.items.button;

	// Overwrite the button function
	Forms.builder.items.button = function (vc: Common.IViewContext, o: Forms.IButtonInfo, p: JQuery) {
		const btn = origBtn(vc, o, p);

		// Add click event to the button
		btn.click(() => {
			//section-headed
			console.log("Button o: ", o);
			console.log("buttonData: ", btn[0].classList);

			// Get the type and name of the current view
			let href = window.location.href;

			const type = /type=(\w+)/.exec(href)[1] || 'Custom';
			const name = /name=(\w+)/.exec(href)[1] || 'default ';

			const classList = btn[0].classList.toString();

			const buttonName = /command-(\w+)/.test(classList) ? /command-(\w+)/.exec(classList)[1] : o.text || 'no Name';

			console.log("type: ", type);
			console.log("name: ", name);
			console.log("buttonName: ", buttonName);

			// Push the event to Countly
			Countly.q.push(['add_event', {
					'key': 'btnClicked',
					'count': 1,
					'segmentation': {
						'btnName': buttonName + ' - ' + name + ' - ' + type
					}
				}]);

			/*
			 * Not working for BRSDemo Project, because there is no menuSource
			 */
			
			//if (btn.data().menuSource) {
			//	const name = getWfId(btn.data().menuSource);
			//	console.log(name);
			//	console.log("button: ", name);

			//	Countly.q.push(['add_event', {
			//		'key': 'btnClicked',
			//		'count': 1,
			//		'segmentation': {
			//			'btnName': name
			//		}
			//	}]);
			//}
		});

		return btn;
	}
}

// Push tab tracking to Countly
function checkCtl() {
	// Get the original ctl function
	const origCtl = Forms.utils.ctl;

	// Overwrite the ctl function
	Forms.utils.ctl = function (vc: Common.IViewContext, o: any, p: JQuery, type: string, build: (o: any, m: Common.IViewModel, p: JQuery) => JQuery, postProc?: (o: any, m: Common.IViewModel, v: any) => void, applySize?: (o: any, inp: JQuery, size: {
		w?: number;
		h?: number;
	}) => boolean) {

		const ctl = origCtl(vc, o, p, type, build, postProc, applySize);
		const featureContainer = ctl.closest('.feature');

		// Add focus event to the ctl
		ctl.focus(() => {
			const name = getTxtboxId(featureContainer.data('feature-context'));
			console.log('CTL focus: ', name);

			// Push the event to Countly
			Countly.q.push(['add_event', {
				'key': o.type,
				'count': 1,
				'segmentation': {
					'focus': name
				}
			}]);
		});

		return ctl;
	}
}

// Push tab tracking to Countly
function checkViewChange(app: Common.IApplication) {
	// Will called everytime the view is changed
	$(app).on('viewchange', (_qe: JQueryEventObject, v: Common.IView) => {

		// Check if the workflow is defined
		if (v.context.requ.wf) {
			const name = getWfId(v.context.requ.wf);
			console.log(name);

			// Push the event to Countly
			Countly.q.push(['track_pageview', name]);
		}
	});
}

// Get the ID from a textbox
function getTxtboxId(featureContext: any) {
	const context: string = featureContext.context.split('@').pop() || 'default';
	const feat: string = featureContext.feat || 'feature';

	return context + ' - ' + feat;
}

// Get the ID form the Workflow
function getWfId(wf: Common.IWorkflowReference) {
	const name: string = wf.name || 'default';
	const type: string = wf.type || 'Custom';
	let entity: string = null;

	if (wf.entity) {
		entity = wf.entity;
	} else if (wf.contextopath) {
		entity = wf.contextopath.split('@').pop();
	} else {
		entity = 'Unknown';
	}

	return entity + ' - ' + type + ' - ' + name;
}

// Generate the consent banner
function createBanner(app: Common.IApplication, vc: Common.IViewContext, p: JQuery) {
	const container = $("<div class='countly-consent-banner' />").appendTo($("body"));
	const contentContainer = $("<div class='content-container'/>").appendTo(container);

	$("<div class='content-image' />").appendTo(contentContainer);

	const content = $("<div class='content' />").appendTo(contentContainer);
	const textContainer = $("<div class='text-container' />").appendTo(content);
	const contentHeader = $("<div class='content-header' />").appendTo(textContainer);

	$("<h3>Analytics</h3>").appendTo(contentHeader);

	const text = $("<span>Wir verwenden Cookies, um Ihre Interaktionen der Anwendung sinnvoller zu gestalten. Sie helfen uns, besser zu verstehen, wie unsere Anwendungen genutzt werden, damit wir die funktionen für Sie anpassen können. Weitere Informationen über die verschiedenen Cookies, die wir verwenden, finden Sie in der </span>");
	const highlighted = $("<span class='highlighted'>Erklärung zum Datenschutz.</span>").appendTo(text);

	highlighted.click(() => {
		app.runwf({
			entity: "dotNetBF.Modules.Services.Security.User",
			type: "Custom",
			name: "ShowConsentText"
		});
	});

	const printText = $("<p class='text' />").appendTo(textContainer);
	text.appendTo(printText);


	const buttonGroup = $("<div class='btnGroup'/>").appendTo(container);

	const acceptBt = Forms.builder.items.button(vc, {
		icon: "",
		text: "Zustimmen",
		click: () => {
			addConsent();
			container.hide();
		}
	}, p);
	acceptBt.addClass("accept");

	const declineBtn = Forms.builder.items.button(vc, {
		icon: "",
		text: "Ablehnen",
		click: () => {
			removeConsent();
			container.hide();
		}
	}, p);

	declineBtn.addClass("decline");

	acceptBt.appendTo(buttonGroup);
	declineBtn.appendTo(buttonGroup);
}

// Allow consent at Countly
function addConsent() {
	let consents = ['all'];
	localStorage.setItem("consents", JSON.stringify(consents));
	Countly.q.push(['add_consent', consents]);
}

// Remove consent at Countly
function removeConsent() {
	let consents = ['all'];
	localStorage.setItem("consents", JSON.stringify([]));
	Countly.q.push(['remove_consent', consents]);
}

// Check if the user has changed the tab
function checkTab() {
	const origTab = Forms.builder.items.tabs;


	Forms.builder.items.tabs = function (vc: Common.IViewContext, o: Forms.IFormTabsInfo, p: JQuery) {
		const tab = origTab(vc, o, p);

		p.find(".tabs-head").click((ev) => {
			const tp = $(ev.target);

			let tpIndex = tp.data("page-index");
			if (tpIndex === undefined) {
				return false;
			} else {
				tpIndex--;
			}

			console.log("Tab Page: ", o.pages[tpIndex]);

			// Push the event to Countly
			Countly.q.push(['add_event', {
				'key': 'tabChanged',
				'count': 1,
				'segmentation': {
					'tabName': o.pages[tpIndex].name ? o.pages[tpIndex].name : 'no Name',
					'tabTitle': o.pages[tpIndex].title ? o.pages[tpIndex].title : 'no Title'
				}
			}]);

		})
		return tab;
	}
}