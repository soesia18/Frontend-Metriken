/// <reference path="../../../../../Base/System/System.UI.Web/bm.system.d.ts"/>
define(["require", "exports", "Core/forms-core"], function (require, exports, Forms) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = void 0;
    function create(vc, o, p) {
        //const text = $("<span class='analytics-text'>Erklärung zum Datenschutz </span>");
        var bt = Forms.builder.items.button(vc, {
            icon: "gallery-img://consent-button.svg",
            text: "Analytics",
            click: function () {
                vc.runwf({
                    contextopath: o.context,
                    type: "Custom",
                    name: "ShowConsentText"
                });
            }
        }, p);
        //text.appendTo(bt);
        bt.addClass("consent-button");
        return bt;
    }
    exports.create = create;
});
