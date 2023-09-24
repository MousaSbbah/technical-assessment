import {
  Given,
  When,
  Then,
  And,
  Before,
} from "cypress-cucumber-preprocessor/steps";
import { propertyFinder } from "../pages/PropertyFinder";

Before(() => {
  propertyFinder.spyAndSaveCall(propertyFinder.searchCall, "searchResults");
});

Given("A user visit the property finder home page", () => {
  propertyFinder.go(propertyFinder.homePagePath);
});

When("A user select the {string} option from category", (category) => {
  propertyFinder.getElementByLocator(propertyFinder.categoryDropdown).click();
  propertyFinder.getElementByLocatorAndText(propertyFinder.categoryOption, category).click();
});

When(
  "A user filters the results by price range: min-{string}, max-{string}",
  (minimumPrice, maximumPrice) => {
    propertyFinder.filterByPriceRange(minimumPrice, maximumPrice);
  }
);

When(
  "A user click on {string} category, from the returned commercial list",
  (category) => {
    propertyFinder
      .getElementByLocatorAndText(propertyFinder.categoryLinks, category)
      .click();
  }
);

When("A user select the “show commercial properties only” checkbox", () => {
  propertyFinder.getElementByLocator(propertyFinder.commercialPropertiesCheckbox).click();
});

When("A user search for the {string} location", (location) => {
 propertyFinder.getElementByLocator(propertyFinder.locationSearchBar).type(location);
 propertyFinder.getElementByLocatorAndText(propertyFinder.locationSuggestions, location).click();
});

And("Select the first property from the list", () => {
  propertyFinder.getElementByLocator(propertyFinder.propertiesListCards).first().click();
});

And("Click the search button", () => {
  propertyFinder.getElementByLocator(propertyFinder.searchIcon).click();
});

Then(
  "Check the total number of results from the API response matches the total displayed property results.",
  () => {
    propertyFinder.getSavedDataFromIntercept('searchResults', '.pageProps.searchResult').then((data) => {
        propertyFinder.getElementByLocator(propertyFinder.totalSearchResultCount).should(
          "have.text",
          propertyFinder.totalSearchResultTexts(data.meta.total_count)
        );
        propertyFinder.getElementByLocator(propertyFinder.propertiesListCards).should("have.length", data.properties.length);
      });
  }
);

Then("Verify the “Available from date” should not be empty", () => {
  propertyFinder.getElementByLocatorAndText(propertyFinder.propertyFactItems, "Available from")
    .find(propertyFinder.propertyFactItem)
    .should("not.be.empty");
});

And("Verify the details of the first property in the searched result from the API response",() => {
    propertyFinder.getSavedDataFromIntercept("searchResults", ".pageProps.searchResult.properties.0").then((firstCardData) => {
        propertyFinder.getElementByLocator(propertyFinder.propertiesListCards).first().as("firstPropertyCard");

        propertyFinder.getSavedElement("firstPropertyCard").find("h2").should("have.text", firstCardData.title);
        propertyFinder.getSavedElement("firstPropertyCard").find(propertyFinder.propertyCardLocation).should("have.text", firstCardData.location.full_name);
        propertyFinder.getSavedElement("firstPropertyCard").find(propertyFinder.propertyCardPrice).invoke("text").should("include", propertyFinder.propertyPriceText(firstCardData.price.value, firstCardData.price.currency));
          propertyFinder.getSavedElement("firstPropertyCard")
          .find(propertyFinder.propertyCardSize)
          .should(
            "have.text",
            propertyFinder.propertySizeText(firstCardData.size.value, firstCardData.size.unit)
          );
          propertyFinder.getSavedElement("firstPropertyCard")
          .find(propertyFinder.propertyBathroomsCount)
          .should("have.text", ` ${firstCardData.bathrooms}`);
      });
  }
);
