/// <reference path="../../../../../Base/System/System.UI.Web/bm.system.d.ts"/>
define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = void 0;
    function create(vc, o, p) {
        var container = $('<div class="button-panel"/>').appendTo(p);
        $("<div class='panel-icon' />").css("background-image", "url('" + vc.convResLink(o.icon) + "')").appendTo(container);
        $("<div class='panel-title' />").text(o.value).appendTo(container);
        $("<div class='panel-description' />").text(o.description).appendTo(container);
        container.click(function () {
            if (o.link)
                window.open(o.link, "_blank").focus();
            else if (o.workflow) {
                vc.runwf({
                    contextopath: o.context,
                    type: "Custom",
                    name: o.workflow
                });
            }
        });
        return container;
    }
    exports.create = create;
});
