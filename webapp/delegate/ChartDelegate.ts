import Chart from "sap/ui/mdc/Chart";
import JSONPropertyInfo from "com/myorg/myapp/model/metadata/JSONPropertyInfoChart";
import ChartDelegate from "sap/ui/mdc/odata/v4/vizChart/ChartDelegate";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";

interface MyChartDelegate {
	fetchProperties(): Promise<typeof JSONPropertyInfo>
	insertItemToInnerChart(oChart: Chart, oChartItem: unknown, iIndex: unknown): Promise<void>
	removeItemFromInnerChart(oChart: Chart, oChartItem: unknown, iIndex: unknown): Promise<void>
	createInnerChartContent(oChart: Chart, fnCallbackDataLoaded: unknown): Promise<void>
	getFilters(oChart: Chart): unknown[];
	_getChart(oChart: Chart): Chart
	_onDataLoadComplete(): Promise<void>
}

interface ExtendedChart extends Chart {
	_innerChartDataLoadComplete: () => void;
  }

const JSONChartDelegate = Object.assign({}, ChartDelegate) as MyChartDelegate

JSONChartDelegate.fetchProperties = async () => {
	return await Promise.resolve(JSONPropertyInfo)
}

JSONChartDelegate.insertItemToInnerChart = async (oChart:ExtendedChart, oChartItem, iIndex) => {
	await (ChartDelegate as MyChartDelegate).insertItemToInnerChart(oChart, oChartItem, iIndex);
	setTimeout(() => {
		oChart._innerChartDataLoadComplete();
	}, 50)
}

JSONChartDelegate.removeItemFromInnerChart = async (oChart:ExtendedChart, oChartItem, iIndex) => {
	await (ChartDelegate as MyChartDelegate).removeItemFromInnerChart(oChart, oChartItem, iIndex);
	setTimeout(() => {
		oChart._innerChartDataLoadComplete();
	}, 50)
}

JSONChartDelegate.createInnerChartContent = async (oChart, fnCallbackDataLoaded): Promise<void> => {
	try {
		await (ChartDelegate as MyChartDelegate).createInnerChartContent.call(JSONChartDelegate, oChart, fnCallbackDataLoaded);
		(ChartDelegate as MyChartDelegate)._getChart(oChart).setHeight(oChart.getHeight());
		return (ChartDelegate as MyChartDelegate)._onDataLoadComplete.apply(oChart);
	} catch {
        console.error('Error during createInnerChartContent');
    }
}


JSONChartDelegate.getFilters = (oChart) => {
	const aFilters = (ChartDelegate as MyChartDelegate).getFilters(oChart);
	aFilters.push(new Filter({ path: "team_name", operator: FilterOperator.EQ, value1: oChart.getBindingContext().getProperty("team_name") as string }))
	return aFilters
}

export default JSONChartDelegate;