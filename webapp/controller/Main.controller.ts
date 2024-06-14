import BaseController from "./BaseController";
import Component from "../Component";
import Event from "sap/ui/base/Event";
import ObjectListItem from "sap/m/ObjectListItem";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {
	onRowPress(event: Event): void {
        const item = <ObjectListItem> event.getSource();
		const bindingContext = event.getParameter("bindingContext") || event.getSource()?.getBindingContext();
        const router = (<Component> this.getOwnerComponent()).getRouter();
        router.navTo("detail", {
            footballPath: window.encodeURIComponent(bindingContext.getPath().substr(1))
        });
    }
}
