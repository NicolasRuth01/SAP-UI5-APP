import Chart from "sap/ui/mdc/Chart";
import ChartItem from "sap/ui/mdc/chart/Item";
import JSONPropertyInfo from "com/myorg/myapp/model/metadata/JSONPropertyInfo"
import ChartDelegate from "sap/ui/mdc/odata/v4/vizChart/ChartDelegate";

const JSONChartDelegate = Object.assign({}, ChartDelegate)

JSONChartDelegate.fetchProperties = async () => {
  return await Promise.resolve(JSONPropertyInfo)}


JSONChartDelegate.createInnerChartContent = async (oChart: Chart, fnCallbackDataLoaded: any): Promise<any> => {
  oChart.
  return ChartDelegate.createInnerChartContent.call(JSONChartDelegate, oChart, fnCallbackDataLoaded).then(function () {

    fnCallbackDataLoaded();
  });
}

export default JSONChartDelegate;