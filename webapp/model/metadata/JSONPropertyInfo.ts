/**
 * @namespace com.myorg.myapp.model.metadata
 * 
 * Property Example:
 * {
 *		"rank": 1,
 *		"team_name": "Liverpool FC",
 *		"matches_played": 38,
 *		"matches_won": 30,
 *		"matches_lost": 3,
 *		"matches_drawn": 5,
 *		"points": 95
 * }
 */
export default [
	{
		key: "rank",
		label: "Rank",
		visible: true,
		path: "rank",
		dataType: "sap.ui.model.type.Integer"
	},
	{
		key: "team_name",
		label: "Team Name",
		visible: true,
		path: "team_name",
		dataType: "sap.ui.model.type.String"
	},{
		key: "matches_played",
		label: "Matches Played",
		visible: true,
		path: "matches_played",
		dataType: "sap.ui.model.type.Integer"
	},{
		key: "matches_won",
		label: "Matches Won",
		visible: true,
		path: "matches_won",
		dataType: "sap.ui.model.type.Integer"
	},{
		key: "matches_lost",
		label: "Matches Lost",
		visible: true,
		path: "matches_lost",
		dataType: "sap.ui.model.type.Integer"
	},{
		key: "matches_drawn",
		label: "Matches Drawn",
		visible: true,
		path: "matches_drawn",
		dataType: "sap.ui.model.type.Integer"
	},{
		key: "points",
		label: "Points",
		visible: true,
		path: "points",
		dataType: "sap.ui.model.type.Integer"
	}
]
