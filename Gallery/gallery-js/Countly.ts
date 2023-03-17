/// <reference path="../../../../../Base/System/System.UI.Web/bm.system.d.ts"/>
//import reqmod = require("module");
import Common = require("Core/common");
import CountlyLib = require("./Libs/countly/countly-lib");
import Forms = require("Core/forms-core");

export function create(app: Common.IApplication, vc: Common.IViewContext, p: JQuery) {
    //const config: any = reqmod.config();
    var Countly: any = CountlyLib || {};
    window.Countly = Countly;
    Countly.q = Countly.q || [];
    Countly.require_consent = true;

    Countly.app_key = '1dbecdad67dd25a810c1644de8d710a4f7cae5ba';
	Countly.url = 'http://10.151.55.255:8888/';

	Countly.q.push(['group_features', {
		all: ['sessions', 'events', 'views', 'scrolls', 'clicks', 'forms', 'crashes', 'attribution', 'users', 'star-rating', 'location', 'apm', 'feedback', 'remote-config'],
		activity: ["sessions", "events", "views"],
		interaction: ["scrolls", "clicks", "forms"]
	}]);

	Countly.q.push(['track_sessions']);
	// Countly.q.push(['track_pageview']);
	Countly.q.push(['track_clicks']);
	Countly.q.push(['track_scrolls']);
	Countly.q.push(['track_errors']);
	Countly.q.push(['track_links']);
	Countly.q.push(['track_forms']);
	Countly.q.push(['collect_from_forms']);
	Countly.q.push(['enable_feedback', { 'popups': ['62cfef0521084f0082294c69'] }]);

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

	function init() {
		Countly.init();
	}

	init();
	//console.log(Countly.features);

	setTimeout(() => {
		checkButton();
		checkCtl();
		checkViewChange(app);
	}, 0);
}

function checkButton() {
	const origBtn = Forms.builder.items.button;

	Forms.builder.items.button = function (vc: Common.IViewContext, o: Forms.IButtonInfo, p: JQuery) {
		const btn = origBtn(vc, o, p);

		btn.click(() => {

			if (btn.data().menuSource) {
				const name = getWfId(btn.data().menuSource);
				console.log(name);

				Countly.q.push(['add_event', {
					'key': 'btnClicked',
					'count': 1,
					'segmentation': {
						'btnName': name
					}
				}]);
			}
		});

		return btn;
	}
}

function checkCtl() {
	const origCtl = Forms.utils.ctl;

	Forms.utils.ctl = function (vc: Common.IViewContext, o: any, p: JQuery, type: string, build: (o: any, m: Common.IViewModel, p: JQuery) => JQuery, postProc?: (o: any, m: Common.IViewModel, v: any) => void, applySize?: (o: any, inp: JQuery, size: {
		w?: number;
		h?: number;
	}) => boolean) {

		const ctl = origCtl(vc, o, p, type, build, postProc, applySize);
		const featureContainer = ctl.closest('.feature');

		ctl.focus(() => {
			const name = getTxtboxId(featureContainer.data('feature-context'));
			console.log('CTL focus: ', name);

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

function checkViewChange(app: Common.IApplication) {
	$(app).on('viewchange', (_qe: JQueryEventObject, v: Common.IView) => {

		if (v.context.requ.wf) {
			const name = getWfId(v.context.requ.wf);
			console.log(name);
			Countly.q.push(['track_pageview', name]);
		}
	});
}
function getTxtboxId(featureContext: any) {
	const context: string = featureContext.context.split('@').pop() || 'default';
	const feat: string = featureContext.feat || 'feature';

	return context + ' - ' + feat;
}

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

function addConsent() {
	let consents = ['all'];
	localStorage.setItem("consents", JSON.stringify(consents));
	Countly.q.push(['add_consent', consents]);
}

function removeConsent() {
	let consents = ['all'];
	localStorage.setItem("consents", JSON.stringify([]));
	Countly.q.push(['remove_consent', consents]);
}