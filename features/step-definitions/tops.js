import * as tops from '../../pageObjects/tops';

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, tops.gotoPage);
    // this.Then(/^I can see logo in navigation bar$/, tops.hasLogo);
    this.Given(/^I filter the product list$/, tops.clickFilterButton);
    this.Given(/^I filter by option Colour$/, tops.clickColourSelectionFilter);
};

