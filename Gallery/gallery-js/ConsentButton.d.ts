/// <reference path="../../../../../Base/System/System.UI.Web/bm.system.d.ts" />
import Common = require("Core/common");
import Forms = require("Core/forms-core");
export interface IFormFeatureInfo extends Common.IFormFeatureInfo, Forms.IFormFormInfo {
    url: string;
}
export declare function create(vc: Common.IViewContext, o: IFormFeatureInfo, p: JQuery): JQuery;
