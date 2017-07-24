export const gotoPage = () => {
    browser.url('/en/tsuk/category/clothing-427/tops-443');
};
export const clickFilterButton = () => {
    browser.click('.Button.Filters-refineButton');
};
export const clickColourSelectionFilter = () => {
    browser.click('.Refinements-content.is-shown .Accordion-title');
};
export const selectColourWhite = () => {
    browser.click('.Refinements.is-shown .ValueOption-item:nth-child(14)');
};
export const selectColourBlack = () => {
    browser.click('.Refinements.is-shown .ValueOption-item:nth-child(1)');
};
export const applyColourFilter = () => {
    browser.click('.Refinements-applyButton');
};
export const oneFilterSelected = () => {
    const elementText = browser.getText('.Button.Filters-refineButton');
    expect(elementText).to.contain('1');
};
export const productMoreThanOneItem = () => {
    browser.isVisible('.ProductList-products');
};
export const clearFilters = () => {
    browser.click('.Refinements-clearButton');
};
export const noFiltersShown = () => {
    const elementText = browser.getText('.Button.Filters-refineButton');
    expect(elementText).to.not.contain('(');
};