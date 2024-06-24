import ValueHelpDelegate from "sap/ui/mdc/ValueHelpDelegate";
import Filter from "sap/ui/mdc/ValueHelpDelegate";
import FilterOperator from "sap/ui/mdc/ValueHelpDelegate";
import library from "sap/m/library";
import Table from "sap/m/Table";
import Column from "sap/m/Column";
import ColumnListItem from "sap/m/ColumnListItem";
import Label from "sap/m/Label";
import Text from "sap/m/Text";
import StringType from "sap/ui/model/type/String";

const JSONValueHelpDelegate: ValueHelpDelegate = Object.assign({}, ValueHelpDelegate);

JSONValueHelpDelegate.retrieveContent = function(oValueHelp: any, oContainer: any, sContentId: string): Promise<void> {

	const aContent: any[] = oContainer.getContent();
	const oContent: any = aContent[0];

	if (!oContent || !oContent.isA("sap.ui.mdc.valuehelp.content.MTable") || oContent.getTable()) {
		return Promise.resolve();
	}

	return new Promise<void>((fnResolve, fnReject) => {
			const { ListMode } = library;
			const oTable = new Table(oContainer.getId() + "-Table", {
				width: oContainer.isTypeahead() ? "13rem" : "100%",
				mode: oContainer.isTypeahead() ? ListMode.SingleSelectMaster : ListMode.SingleSelectLeft,
				columns: [
					
					new Column({
						width: "20rem",
						header: new Label({text: "Name"})
					})
				],
				items: {path: "clubs", template: new ColumnListItem({
					type: "Active",
					cells: [
						new Text({text: {path: 'team_name', type: new StringType()}})
					]
				})}
			});
			oContent.setTable(oTable);
			fnResolve();
		});
	};


// JSONValueHelpDelegate.updateBindingInfo = function(oValueHelp: any, oContent: any, oBindingInfo: any): void {
// 	ValueHelpDelegate.updateBindingInfo(oValueHelp, oContent, oBindingInfo);

// 	// create search filters
// 	const oPayload = oValueHelp.getPayload();
// 	if (oPayload.searchKeys) { // TODO: Move filter generation in separate method?
// 		const aFilters = oPayload.searchKeys.map((sPath: string) => new Filter({path: sPath, operator: FilterOperator.Contains, value1: oContent.getSearch(), caseSensitive: oContent.getCaseSensitive()}));
// 		const oSearchFilter = aFilters && aFilters.length && new Filter(aFilters, false);
// 		if (oSearchFilter) {
// 			oBindingInfo.filters = oBindingInfo.filters.concat(oSearchFilter);
// 		}
// 	}
// }

// enable typeahead
JSONValueHelpDelegate.isSearchSupported = function (oValueHelp: any, oContent: any, oListBinding: any): boolean {
	return !!oValueHelp.getPayload()?.searchKeys;
}

JSONValueHelpDelegate.shouldOpenOnClick = function(oValueHelp: any, oContainer: any): Promise<boolean> {
	const oPayload = oValueHelp.getPayload();

	if (oPayload && oPayload.hasOwnProperty("shouldOpenOnClick")) {
		return Promise.resolve(oPayload.shouldOpenOnClick);
	} else {
		return ValueHelpDelegate.shouldOpenOnClick.apply(this, arguments);
	}
}

JSONValueHelpDelegate.shouldOpenOnFocus = function(oValueHelp: any, oContainer: any): Promise<boolean> {
	const oPayload = oValueHelp.getPayload();

	if (oPayload && oPayload.hasOwnProperty("shouldOpenOnFocus")) {
		return Promise.resolve(oPayload.shouldOpenOnFocus);
	} else {
		return ValueHelpDelegate.shouldOpenOnFocus.apply(this, arguments);
	}
}

JSONValueHelpDelegate.showTypeahead = function(oValueHelp: any, oContent: any): boolean {

	const oPayload = oValueHelp.getPayload();

	if (oPayload && oPayload.hasOwnProperty("shouldOpenOnFocus") && !oContent.getFilterValue()) {
		return true; // open if no filter too
	} else {
		return ValueHelpDelegate.showTypeahead.apply(this, arguments);
	}

}

export default JSONValueHelpDelegate;