import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import History from "sap/ui/core/routing/History";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Detail extends Controller {

    onInit(): void {
        const router = (<Component> this.getOwnerComponent()).getRouter();
        router.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
        this.loadFragment({
            name: "com.myorg.myapp.view.Display"
        }).then((formFragment) => {
            this.getView().getContent()[0].addContent(formFragment);
        })
    }

    onObjectMatched(event: Route$PatternMatchedEvent): void {
        this.getView().bindElement({
            path: "/" + window.decodeURIComponent( (<any> event.getParameter("arguments")).footballPath),
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