/// <reference path="../../../../../Base/System/System.UI.Web/bm.system.d.ts"/>

import Common = require("Core/common");
import Forms = require("Core/forms-core");

export interface IFormFeatureInfo extends Common.IFormFeatureInfo, Forms.IFormFormInfo {
	url: string;
}

export function create(vc: Common.IViewContext, o: IFormFeatureInfo, p: JQuery) {
	//const text = $("<span class='analytics-text'>Erklärung zum Datenschutz </span>");
	const bt = Forms.builder.items.button(vc, {
		icon: "gallery-img://consent-button.svg",
		text: "Analytics",
		click: () => {
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