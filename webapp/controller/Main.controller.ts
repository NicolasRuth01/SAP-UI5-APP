import DynamicPage from "sap/f/DynamicPage";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import Control from "sap/ui/mdc/Control";
import StateUtil from "sap/ui/mdc/p13n/StateUtil"
import { State } from "sap/ui/mdc/library";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {

     async onInit(): Promise<void> {
        try {
            const formFragment = await this.loadFragment({
                name: "com.myorg.myapp.view.Table"
            });    
            const view = this.getView();
            const content = view.getContent()[0];
            (content as DynamicPage).setContent(formFragment as Control);                       


            StateUtil.attachStateChange(this.filtersChanged);
            StateUtil.attachStateChange(this.tableChanged);
            const storageFilterBar = localStorage.getItem("FilterFieldState");
            const storageTable = localStorage.getItem("TableState");

            if (storageFilterBar !== null){
                await StateUtil.applyExternalState(this.getView().byId("filterbar") as Control, JSON.parse(storageFilterBar));
            }
            else{
                const state = await StateUtil.retrieveExternalState(this.getView().byId("filterbar") as Control) as unknown;
                localStorage.setItem("FilterFieldState", JSON.stringify(state))
            }
            if (storageTable !== null){
                await StateUtil.applyExternalState(formFragment as Control, JSON.parse(storageTable));
            }
            else{
                const state = await StateUtil.retrieveExternalState(formFragment as Control) as State;
                localStorage.setItem("TableState", JSON.stringify(state))
            }
        } catch (error) {
            console.error('Error during init', error);      
        }
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
    filtersChanged = async() => {
        const state = await StateUtil.retrieveExternalState(this.getView().byId("filterbar") as Control) as unknown;
        localStorage.setItem("FilterFieldState", JSON.stringify(state))
    }
    tableChanged = async() => {
        const state = await StateUtil.retrieveExternalState(this.getView().byId("table") as Control) as unknown;
        localStorage.setItem("TableState", JSON.stringify(state))
    }
}
