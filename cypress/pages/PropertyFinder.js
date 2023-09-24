/*global cy*/

class PropertyFinder {
  // Variables
  searchCall = "**/search.json?**";
  homePagePath = "/";
  totalSearchResultTexts = (count) =>  `${count} properties`;
  propertySizeText = (value, unit) => ` ${value} ${unit}`;
  propertyPriceText = (value, currency) => `${value.toLocaleString()} ${currency}`

  // Locators
    categoryDropdown = ".filter-form-component-variant__row-second-3 > [class*=propertyTypeId] > .dd__head ";
    categoryOption = ".dropdown-list__item-content";
    priceRangeDropdown = '[data-testid="filters-form-dropdown-price"] > span';
    minimumPriceTextField = '[data-testid="filters-form-range-dropdown-from-input"]';
    pricesOptions = '[data-testid="dropdown-content"] button';
    maximumPriceTextField = '[data-testid="filters-form-range-dropdown-to-input"]';
    priceRangeOverRelay = '[data-testid="dropdown-overlay"]';
    findButton = '[data-testid="filters-form-btn-find"]';
    categoryLinks = "[class*=styles_desktop_aggregation-links__name]";
    commercialPropertiesCheckbox = ".checkbox-component__label";
    locationSearchBar = '.filter-form-component-variant__row-3 > [data-testid="root"] > [data-testid="container"] > [data-testid="input"]';
    locationSuggestions = ".multi-selection-autocomplete__suggestion-text";
    propertiesListCards = "[data-testid*=list-item] > [class*=property-card-module_property-card]";
    searchIcon =  ".filter-form-component-variant__row-3 > .filter-form-component-variant__m-hide";
    totalSearchResultCount = '[aria-label="Search results count"]';
    propertyFactItems = ".property-facts > .property-facts__item";
    propertyFactItem = ".property-facts__value";
    propertyCardLocation = '[data-testid="property-card-location"]';
    propertyCardPrice = '[data-testid="property-card-price"]';
    propertyCardSize = '[data-testid="property-card-spec-area"]';
    propertyBathroomsCount = '[data-testid="property-card-spec-bathroom"]';
  // Methods

  spyAndSaveCall(call, alias) {
    cy.intercept(call).as(alias);
  }

  go(path) {
    cy.visit(path);
  }

  filterByPriceRange (minimumPrice, maximumPrice) {
    cy.get(this.priceRangeDropdown).click();
    cy.get(this.minimumPriceTextField).click();
    cy.contains(this.pricesOptions, minimumPrice).click({waitForAnimations: false});
    cy.get(this.maximumPriceTextField).click();
    cy.contains(this.pricesOptions, maximumPrice).click({waitForAnimations: false});
    cy.wait(500);
    cy.get(this.priceRangeOverRelay).click();
    cy.get(this.findButton).click();
  }

  getElementByLocator (locator) {
    return cy.get(locator);
  }

  getElementByLocatorAndText (locator, text) {
    return cy.contains(locator, text);
  }

  getSavedDataFromIntercept (alias, dataPath){
    return  cy.get(`@${alias}`).its(`response.body${dataPath}`)
  }

  getSavedElement(alias){
    return cy.get(`@${alias}`);
  }
}

export const propertyFinder = new PropertyFinder();
