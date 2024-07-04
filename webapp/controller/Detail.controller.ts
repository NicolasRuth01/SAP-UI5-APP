import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import History from "sap/ui/core/routing/History";
import View from "sap/ui/core/mvc/View";
import Control from "sap/ui/core/Control";
import Chart from "sap/ui/mdc/Chart";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Detail extends Controller {

    onInit(): void {
        const router = (<Component> this.getOwnerComponent()).getRouter();
        router.getRoute("detail").attachPatternMatched(this.onObjectMatched.bind(this), this);
        this.loadFragment({
            name: "com.myorg.myapp.view.Display"
        }).then((formFragment) => {
            const view = this.getView();
            const content = view.getContent()[0] as View;
            content.addContent(formFragment as Control);
        }).catch(err => {
            console.error('Error during init', err); 
        })
    }

    onObjectMatched(event: Route$PatternMatchedEvent): void {
        const args = event.getParameter("arguments") as { footballPath: string };
        this.getView().bindElement({
            path: "/" + window.decodeURIComponent(args.footballPath),
        });
        const oChart = this.byId("chart_id") as Chart;
        (oChart as unknown as { initialized(): Promise<void>; }).initialized().then(()=>{
            (oChart as unknown as { _rebind(): Promise<void>; })._rebind().then(()=>{ 
            oChart.setBusy(false); 
            }).catch(err => {
                console.error('Error during _rebind', err); 
            })
        }).catch(err => {
            console.error('Error during initialized', err);
        }); 
    }

    onNavBack(): void {
        const history = History.getInstance();
        const previousHash = history.getPreviousHash();

        if (previousHash !== undefined) {
            window.history.go(-1);
        } else {
            const router = (<Component> this.getOwnerComponent()).getRouter();
            router.navTo("main", {}, true);
        }
    }
}