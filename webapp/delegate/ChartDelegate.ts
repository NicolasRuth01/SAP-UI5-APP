import Chart from "sap/ui/mdc/Chart";
import JSONPropertyInfo from "com/myorg/myapp/model/metadata/JSONPropertyInfoChart";
import ChartDelegate from "sap/ui/mdc/odata/v4/vizChart/ChartDelegate";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";


const JSONChartDelegate = Object.assign({}, ChartDelegate)

JSONChartDelegate.fetchProperties = async () => {
  return await Promise.resolve(JSONPropertyInfo)}

  JSONChartDelegate.insertItemToInnerChart = async (oChart:Chart, oChartItem, iIndex) => {
    await ChartDelegate.insertItemToInnerChart(oChart, oChartItem, iIndex);
    setTimeout(() => {
      oChart._innerChartDataLoadComplete();
    }, 50)
  }

  JSONChartDelegate.removeItemFromInnerChart = async (oChart: Chart, oChartItem, iIndex) => {
    await ChartDelegate.removeItemFromInnerChart(oChart, oChartItem, iIndex);
    setTimeout(() => {
      oChart._innerChartDataLoadComplete();
    }, 50)
  }

JSONChartDelegate.createInnerChartContent = async (oChart: Chart, fnCallbackDataLoaded: any): Promise<any> => {
  return await ChartDelegate.createInnerChartContent.call(JSONChartDelegate, oChart, fnCallbackDataLoaded).finally(function () {
    ChartDelegate._getChart(oChart).setHeight(oChart.getHeight());
    ChartDelegate._onDataLoadComplete.apply(oChart);
  })
}

JSONChartDelegate.getFilters = (oChart:Chart) => {
  const aFilters = ChartDelegate.getFilters(oChart);
  aFilters.push(new Filter({ path: "team_name", operator: FilterOperator.EQ, value1: oChart.getBindingContext().getProperty("team_name") }))
  return aFilters
}

export default JSONChartDelegate;