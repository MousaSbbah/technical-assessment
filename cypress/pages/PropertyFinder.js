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

	/**
 	* Spies on a network call using Cypress' `cy.intercept` and saves it with an alias.
 	*
 	* @param {string} call - The network call to intercept, e.g., 'GET /api/data'.
 	* @param {string} alias - The alias to assign to the intercepted call.
 	* @returns {void}
 	*/
	spyAndSaveCall (call, alias) {
		cy.intercept(call).as(alias);
	}

	/**
 	* Navigates to the specified URL using Cypress' `cy.visit`.
 	*
 	* @param {string} path - The URL path to navigate to.
 	* @returns {void}
 	*/
	go (path) {
		cy.visit(path);
	}

	/**
	 * Filters properties by price range.
	 *
	 * @param {string} minimumPrice - The minimum price value.
	 * @param {string} maximumPrice - The maximum price value.
	 * @returns {void}
	 */
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

	/**
 	* Retrieves an element on the page using the specified locator.
 	*
 	* @param {string} locator - The locator string for the element, such as a CSS selector or XPath.
 	* @returns {Chainable<JQuery<HTMLElement>>} - A Cypress chainable object representing the located element.
 	*/
	getElementByLocator = (locator) => cy.get(locator);

	/**
 	* Retrieves an element on the page that contains the specified text using the provided locator.
 	*
 	* @param {string} locator - The locator string for the element, such as a CSS selector or XPath.
 	* @param {string} text - The text to search for within the located element.
 	* @returns {Chainable<JQuery<HTMLElement>>} - A Cypress chainable object representing the located element.
 	*/
	getElementByLocatorAndText (locator, text) {
		return cy.contains(locator, text);
	}

	/**
 	* Retrieves saved data from a Cypress network intercept using the specified alias and data path.
 	*
 	* @param {string} alias - The alias assigned to the intercepted network call.
 	* @param {string} dataPath - The path to the desired data within the intercepted response body.
 	* @returns {Chainable} - A Cypress chainable object representing the retrieved data.
 	*/
	getSavedDataFromIntercept (alias, dataPath){
		return cy.get(`@${alias}`).its(`response.body${dataPath}`);
	}

	/**
 	* Retrieves a saved element using the specified alias from Cypress' `cy.get`.
 	*
 	* @param {string} alias - The alias assigned to the saved element.
 	* @returns {Chainable<JQuery<HTMLElement>>} - A Cypress chainable object representing the saved element.
 	*/
	getSavedElement (alias){
		return cy.get(`@${alias}`);
	}
}

export const propertyFinder = new PropertyFinder();
