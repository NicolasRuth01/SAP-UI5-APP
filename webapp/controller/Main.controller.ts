import DynamicPage from "sap/f/DynamicPage";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";

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
            (content as DynamicPage).setContent(formFragment);                       
        }).catch(()=>console.log('AAA'))
    }

	onRowPress(event: Event): void {
		const bindingContext = event.getParameter(<never> "bindingContext"); //? <never>
        const router = (this.getOwnerComponent()).getRouter();
        router.navTo("detail", {
            footballPath: window.encodeURIComponent((bindingContext.getPath()).substr(1))
        });
    }
}
