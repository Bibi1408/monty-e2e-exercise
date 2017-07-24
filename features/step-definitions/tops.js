import * as tops from '../../pageObjects/tops';

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, tops.gotoPage);
    this.Given(/^I filter the product list$/, tops.clickFilterButton);
    this.Given(/^I filter by option Colour$/, tops.clickColourSelectionFilter);
    this.Given(/^I select colour White$/, tops.selectColourWhite);
    this.Given(/^I select colour Black$/, tops.selectColourBlack);
    this.When(/^I apply these filters$/, tops.applyColourFilter);
    this.Then(/^Filter button has 1 filter$/, tops.oneFilterSelected);
    this.Then(/^Filter returns a product list$/, tops.productMoreThanOneItem);
    this.Given(/^I clear all filters$/, tops.clearFilters);
    this.Then(/^Filter button has no filters$/, tops.noFiltersShown);
};

