import DynamicPage from "sap/f/DynamicPage";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import Control from "sap/ui/core/Control";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {

    onInit(): void {
        this.loadFragment({
            name: "com.myorg.myapp.view.Table"
        }).then((formFragment) => {
            const view = this.getView();
            const content = view.getContent()[0];
            (content as DynamicPage).setContent(formFragment as Control);                       
        }).catch(()=>console.log('AAA'))
    }

	onRowPress(event: Event): void {
        const bindingContext = (event.getParameter as (param: string) => { getPath: () => string })("bindingContext");
        const router = (this.getOwnerComponent()).getRouter() as { navTo: (routeName: string, args: { footballPath: string }) => void };
        if (bindingContext) {
            const path = bindingContext.getPath();
            router.navTo("detail", {
                footballPath: window.encodeURIComponent(path.substr(1))
            });
        }
    }
}
