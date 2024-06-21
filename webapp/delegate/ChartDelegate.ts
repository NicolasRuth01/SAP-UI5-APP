import Chart from "sap/ui/mdc/Chart";
import JSONPropertyInfo from "com/myorg/myapp/model/metadata/JSONPropertyInfo";
import ChartDelegate from "sap/ui/mdc/odata/v4/vizChart/ChartDelegate";
import JSONModel from "sap/ui/model/json/JSONModel";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";

const JSONChartDelegate = Object.assign({}, ChartDelegate)


JSONChartDelegate.fetchProperties = async () => {
  return await Promise.resolve(JSONPropertyInfo)}


JSONChartDelegate.createInnerChartContent = async (oChart: Chart, fnCallbackDataLoaded: any): Promise<any> => {
  return ChartDelegate.createInnerChartContent.call(JSONChartDelegate, oChart, fnCallbackDataLoaded).finally(function () {
    fnCallbackDataLoaded();
  })
}

JSONChartDelegate.getFilters = (oChart) => {
  const aFilters = ChartDelegate.getFilters(oChart);
  aFilters.push(new Filter({ path: "team_name", operator: FilterOperator.EQ, value1: oChart.getBindingContext().getProperty("team_name") }))
  return aFilters
}

export default JSONChartDelegate;