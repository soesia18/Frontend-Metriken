/// <reference path="..\..\..\Modules\_refs\BM.System\Web\bm.system.d.ts"/>
define(["require", "exports", "module", "./Libs/countly/countly-lib", "Core/forms-core", "jquery"], function (require, exports, reqmod, CountlyLib, Forms, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = void 0;
    var Countly = CountlyLib || {};
    function create(app, vc, p) {
        //let Countly: any = CountlyLib || {};
        //window.Countly = Countly;
        Countly.q = Countly.q || [];
        Countly.require_consent = true;
        //provide countly initialization parameters
        var config = reqmod.config();
        console.log(config);
        Countly.app_key = config.AppKey;
        Countly.url = config.Url;
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
        Countly.q.push(['enable_feedback', { 'popups': ['62de785f1779a900806e58d4'] }]);
        if (typeof (localStorage) !== "undefined") {
            var consents = localStorage.getItem("consents");
            if (consents) {
                Countly.q.push(['add_consent', JSON.parse(consents)]);
            }
            else {
                createBanner(app, vc, p);
            }
        }
        else {
            console.log("Not supported");
        }
        function init() {
            Countly.init();
        }
        init();
        //console.log(Countly.features);
        setTimeout(function () {
            checkButton();
            checkCtl();
            checkViewChange(app);
            checkTab();
        }, 0);
    }
    exports.create = create;
    function checkButton() {
        var origBtn = Forms.builder.items.button;
        Forms.builder.items.button = function (vc, o, p) {
            var btn = origBtn(vc, o, p);
            btn.click(function () {
                //section-headed
                console.log("Button o: ", o);
                console.log("buttonData: ", btn[0].classList);
                var href = window.location.href;
                var type = /type=(\w+)/.exec(href)[1] || 'Custom';
                var name = /name=(\w+)/.exec(href)[1] || 'default ';
                var classList = btn[0].classList.toString();
                var buttonName = /command-(\w+)/.test(classList) ? /command-(\w+)/.exec(classList)[1] : o.text || 'no Name';
                console.log("type: ", type);
                console.log("name: ", name);
                console.log("buttonName: ", buttonName);
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
        };
    }
    function checkCtl() {
        var origCtl = Forms.utils.ctl;
        Forms.utils.ctl = function (vc, o, p, type, build, postProc, applySize) {
            var ctl = origCtl(vc, o, p, type, build, postProc, applySize);
            var featureContainer = ctl.closest('.feature');
            ctl.focus(function () {
                var name = getTxtboxId(featureContainer.data('feature-context'));
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
        };
    }
    function checkViewChange(app) {
        $(app).on('viewchange', function (_qe, v) {
            if (v.context.requ.wf) {
                var name_1 = getWfId(v.context.requ.wf);
                console.log(name_1);
                Countly.q.push(['track_pageview', name_1]);
            }
        });
    }
    function getTxtboxId(featureContext) {
        var context = featureContext.context.split('@').pop() || 'default';
        var feat = featureContext.feat || 'feature';
        return context + ' - ' + feat;
    }
    function getWfId(wf) {
        var name = wf.name || 'default';
        var type = wf.type || 'Custom';
        var entity = null;
        if (wf.entity) {
            entity = wf.entity;
        }
        else if (wf.contextopath) {
            entity = wf.contextopath.split('@').pop();
        }
        else {
            entity = 'Unknown';
        }
        return entity + ' - ' + type + ' - ' + name;
    }
    function createBanner(app, vc, p) {
        var container = $("<div class='countly-consent-banner' />").appendTo($("body"));
        var contentContainer = $("<div class='content-container'/>").appendTo(container);
        $("<div class='content-image' />").appendTo(contentContainer);
        var content = $("<div class='content' />").appendTo(contentContainer);
        var textContainer = $("<div class='text-container' />").appendTo(content);
        var contentHeader = $("<div class='content-header' />").appendTo(textContainer);
        $("<h3>Analytics</h3>").appendTo(contentHeader);
        var text = $("<span>Wir verwenden Cookies, um Ihre Interaktionen der Anwendung sinnvoller zu gestalten. Sie helfen uns, besser zu verstehen, wie unsere Anwendungen genutzt werden, damit wir die funktionen für Sie anpassen können. Weitere Informationen über die verschiedenen Cookies, die wir verwenden, finden Sie in der </span>");
        var highlighted = $("<span class='highlighted'>Erklärung zum Datenschutz.</span>").appendTo(text);
        highlighted.click(function () {
            app.runwf({
                entity: "dotNetBF.Modules.Services.Security.User",
                type: "Custom",
                name: "ShowConsentText"
            });
        });
        var printText = $("<p class='text' />").appendTo(textContainer);
        text.appendTo(printText);
        var buttonGroup = $("<div class='btnGroup'/>").appendTo(container);
        var acceptBt = Forms.builder.items.button(vc, {
            icon: "",
            text: "Zustimmen",
            click: function () {
                addConsent();
                container.hide();
            }
        }, p);
        acceptBt.addClass("accept");
        var declineBtn = Forms.builder.items.button(vc, {
            icon: "",
            text: "Ablehnen",
            click: function () {
                removeConsent();
                container.hide();
            }
        }, p);
        declineBtn.addClass("decline");
        acceptBt.appendTo(buttonGroup);
        declineBtn.appendTo(buttonGroup);
    }
    function addConsent() {
        var consents = ['all'];
        localStorage.setItem("consents", JSON.stringify(consents));
        Countly.q.push(['add_consent', consents]);
    }
    function removeConsent() {
        var consents = ['all'];
        localStorage.setItem("consents", JSON.stringify([]));
        Countly.q.push(['remove_consent', consents]);
    }
    function checkTab() {
        var origTab = Forms.builder.items.tabs;
        Forms.builder.items.tabs = function (vc, o, p) {
            var tab = origTab(vc, o, p);
            p.find(".tabs-head").click(function (ev) {
                var tp = $(ev.target);
                var tpIndex = tp.data("page-index");
                if (tpIndex === undefined) {
                    return false;
                }
                else {
                    tpIndex--;
                }
                console.log("Tab Page: ", o.pages[tpIndex]);
                Countly.q.push(['add_event', {
                        'key': 'tabChanged',
                        'count': 1,
                        'segmentation': {
                            'tabName': o.pages[tpIndex].name ? o.pages[tpIndex].name : 'no Name',
                            'tabTitle': o.pages[tpIndex].title ? o.pages[tpIndex].title : 'no Title'
                        }
                    }]);
            });
            return tab;
        };
    }
});
