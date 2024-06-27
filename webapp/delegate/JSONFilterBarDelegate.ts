import FilterBarDelegate from "sap/ui/mdc/FilterBarDelegate"
import JSONPropertyInfo from "com/myorg/myapp/model/metadata/JSONPropertyInfo"
import FilterField from "sap/ui/mdc/FilterField"
import Element from "sap/ui/core/Element"
import {default as FilterBar, PropertyInfo as FilterBarPropertyInfo} from "sap/ui/mdc/FilterBar"
import Slider from "sap/m/Slider"

const JSONFilterBarDelegate = Object.assign({}, FilterBarDelegate)

JSONFilterBarDelegate.fetchProperties = async () => {
	return await Promise.resolve(JSONPropertyInfo)}

const _createFilterField = (id:string, property:FilterBarPropertyInfo) => {
	const propertyKey = property.key
	if(propertyKey === "team_name"){
		const filterField = new FilterField(id, {
			label:"Team Name",
			propertyKey:"team_name",
			dataType:"sap.ui.model.type.String",
			conditions:"{$filters>/conditions/team_name}",
			delegate:{name: 'sap/ui/mdc/field/FieldBaseDelegate'},
			display:"Description",
			valueHelp:"__component0---main--VH-TypeAheadDropdown",
	})
	return filterField
	}else if (propertyKey === "matches_won"){
		const filterField = new FilterField(id, {
			id:"Slider",
			label:"Minimum Matches Won",
			conditions:"{$filters>/conditions/matches_won}",
			propertyKey:"matches_won",
			dataType:"sap.ui.model.type.Integer",
			maxConditions:1,
			operators:["GE"],
			delegate:{name: "sap/ui/mdc/field/FieldBaseDelegate", "payload": {}},
			content: new Slider("F1-S",{showAdvancedTooltip:true, value:"{path: '$field>/conditions', type: 'sap.ui.mdc.field.ConditionsType'}", min:0, max:38}),
	})
	return filterField
	}else{
		const filterField = new FilterField(id, {
			dataType: property.dataType,
			conditions: `{$filters>/conditions/${propertyKey}}`,
			propertyKey: propertyKey,
			required: property.required,
			label: property.label,
			maxConditions: property.maxConditions,
			delegate: {name: "sap/ui/mdc/field/FieldBaseDelegate", payload: {}}
		})
		return filterField
		}
}

JSONFilterBarDelegate.addItem = async (filterBar:FilterBar, propertyKey:string) => {
	const property = JSONPropertyInfo.find((p) => p.key === propertyKey) as FilterBarPropertyInfo
	const id = `${filterBar.getId()}--filter--${propertyKey}`
	const filterField = Element.getElementById(id) as FilterField
	return await Promise.resolve(filterField ?? _createFilterField(id, property))
}

export default JSONFilterBarDelegate