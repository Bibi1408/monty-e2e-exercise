export const gotoPage = () => {
    browser.url('/en/tsuk/category/clothing-427/tops-443')
}

// export const hasLogo = () => {
    // browser.isVisible(".BrandLogo-img")
// }

export const clickFilterButton = () => {
    browser.click('.Button.Filters-refineButton');
}
export const clickColourSelectionFilter = () => {
    browser.click('.RefinementList-accordionHeader');
}
