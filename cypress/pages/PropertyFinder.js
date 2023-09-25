/* global cy */
class PropertyFinder {
	// Variables
	searchCall = '**/search.json?**';

	homePagePath = '/';

	// Dynamic Variables
	propertyPriceText = (value, currency) => `${value.toLocaleString()} ${currency}`;

	propertySizeText = (value, unit) => ` ${value} ${unit}`;

	totalSearchResultTexts = (count) => `${count} properties`;

	// Locators
	categoryDropdown = '.filter-form-component-variant__row-second-3 > [class*=propertyTypeId] > .dd__head ';

	categoryLinks = '[class*=styles_desktop_aggregation-links__name]';

	categoryOption = '.dropdown-list__item-content';

	commercialPropertiesCheckbox = '.checkbox-component__label';

	findButton = '[data-testid="filters-form-btn-find"]';

	locationSearchBar = '.filter-form-component-variant__row-3 > [data-testid="root"] > [data-testid="container"] > [data-testid="input"]';

	locationSuggestions = '.multi-selection-autocomplete__suggestion-text';

	maximumPriceTextField = '[data-testid="filters-form-range-dropdown-to-input"]';

	minimumPriceTextField = '[data-testid="filters-form-range-dropdown-from-input"]';

	priceRangeDropdown = '[data-testid="filters-form-dropdown-price"] > span';

	priceRangeOverRelay = '[data-testid="dropdown-overlay"]';

	pricesOptions = '[data-testid="dropdown-content"] button';

	propertiesListCards = '[data-testid*=list-item] > [class*=property-card-module_property-card]';

	propertyBathroomsCount = '[data-testid="property-card-spec-bathroom"]';

	propertyCardLocation = '[data-testid="property-card-location"]';

	propertyCardPrice = '[data-testid="property-card-price"]';

	propertyCardSize = '[data-testid="property-card-spec-area"]';

	propertyFactItem = '.property-facts__value';

	propertyFactItems = '.property-facts > .property-facts__item';

	searchIcon = '.filter-form-component-variant__row-3 > .filter-form-component-variant__m-hide';

	totalSearchResultCount = '[aria-label="Search results count"]';

	// Methods
	spyAndSaveCall (call, alias) {
		cy.intercept(call).as(alias);
	}

	go (path) {
		cy.visit(path);
	}

	filterByPriceRange (minimumPrice, maximumPrice) {
		cy.get(this.priceRangeDropdown).click();
		cy.get(this.minimumPriceTextField).click({waitForAnimations: false});
		cy.contains(this.pricesOptions, minimumPrice).click({waitForAnimations: false});
		cy.get(this.maximumPriceTextField).click({waitForAnimations: false});
		cy.contains(this.pricesOptions, maximumPrice).click({waitForAnimations: false});
		cy.wait(500);
		cy.get(this.priceRangeOverRelay).click();
		cy.get(this.findButton).click();
	}

	getElementByLocator = (locator) => cy.get(locator);


	getElementByLocatorAndText (locator, text) {
		return cy.contains(locator, text);
	}

	getSavedDataFromIntercept (alias, dataPath){
		return cy.get(`@${alias}`).its(`response.body${dataPath}`);
	}

	getSavedElement (alias){
		return cy.get(`@${alias}`);
	}
}

export const propertyFinder = new PropertyFinder();
