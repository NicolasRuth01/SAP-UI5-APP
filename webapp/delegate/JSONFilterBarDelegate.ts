import FilterBarDelegate from "sap/ui/mdc/FilterBarDelegate"
import JSONPropertyInfo from "com/myorg/myapp/model/metadata/JSONPropertyInfo"
import FilterField from "sap/ui/mdc/FilterField"
import Element from "sap/ui/core/Element"
import {default as FilterBar, PropertyInfo as FilterBarPropertyInfo} from "sap/ui/mdc/FilterBar"

const JSONFilterBarDelegate = Object.assign({}, FilterBarDelegate)

JSONFilterBarDelegate.fetchProperties = async () => {
    return await Promise.resolve(JSONPropertyInfo)}

const _createFilterField = async (id:string, property:FilterBarPropertyInfo, filterBar:FilterBar) => {
	const propertyKey = property.key
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

JSONFilterBarDelegate.addItem = async (filterBar:FilterBar, propertyKey:string) => {
	const property = JSONPropertyInfo.find((p) => p.key === propertyKey) as FilterBarPropertyInfo
	const id = `${filterBar.getId()}--filter--${propertyKey}`
	const filterField = Element.getElementById(id) as FilterField
	return await Promise.resolve(filterField ?? _createFilterField(id, property, filterBar))
}

export default JSONFilterBarDelegate