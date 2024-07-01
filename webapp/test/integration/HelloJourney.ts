/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import MainPage from "./pages/MainPage";
import MDCTestLib from "test-resources/sap/ui/mdc/testutils/opa/TestLibrary";
import Opa5 from "sap/ui/test/Opa5";
import FilterField from "sap/ui/mdc/FilterField";

const onTheMainPage = new MainPage();
const onTheFilterField = new FilterField();

QUnit.module("Sample Hello Journey");

opaTest("Should type in Search Field", function () {
	// Arrangements
	onTheMainPage.iStartMyUIComponent({
		componentConfig: {
			name: "com.myorg.myapp"
		}
	});

	// Actions
	onTheFilterField.iEnterTextOnTheFilterField("basicSearchField", "Klopp");

	// Assertions
	onTheFilterField.iShouldSeeTheFilterField("basicSearchField", "Klopp");

	// Cleanup
	onTheMainPage.iTeardownMyApp();
});