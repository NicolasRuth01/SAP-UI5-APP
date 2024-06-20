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
 *		"points": 95,
 *		"founded": 1892,
 *      "members": 28,
 *      "coach": "Jürgen Klopp",
 *		"stadium": "Anfield",
 *		"homepage": "https://www.liverpoolfc.com/",
 *		"facebook": "https://www.facebook.com/LiverpoolFC",
 *		"instagram": "https://www.instagram.com/liverpoolfc",
 *		"tiktok": "https://www.tiktok.com/@liverpoolfc",
 *		"twitter": "https://twitter.com/LFC"
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
	},{
		key: "founded",
		label: "Founded",
		visible: true,
		path: "founded",
		dataType: "sap.ui.model.type.Integer"
	},{
		key: "members",
		label: "Members",
		visible: true,
		path: "members",
		dataType: "sap.ui.model.type.Integer"
	},{
		key: "coach",
		label: "Coach",
		visible: true,
		path: "coach",
		dataType: "sap.ui.model.type.String"
	},{
		key: "stadium",
		label: "Stadium",
		visible: true,
		path: "stadium",
		dataType: "sap.ui.model.type.String"
	},{
		key: "homepage",
		label: "Homepage",
		visible: true,
		path: "homepage",
		dataType: "sap.ui.model.type.String"
	},{
		key: "instagram",
		label: "Instagram",
		visible: true,
		path: "instagram",
		dataType: "sap.ui.model.type.String"
	},{
		key: "facebook",
		label: "Facebook",
		visible: true,
		path: "facebook",
		dataType: "sap.ui.model.type.String"
	},{
		key: "tiktok",
		label: "Tiktok",
		visible: true,
		path: "tiktok",
		dataType: "sap.ui.model.type.String"
	},{
		key: "twitter",
		label: "Twitter",
		visible: true,
		path: "twitter",
		dataType: "sap.ui.model.type.String"
	}
]
