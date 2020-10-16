class JobSearch {
  constructor(
    searchFormSelector,
    resultsContainerSelector,
    loadingElementSelector
  ) {
    this.searchForm = document.querySelector(searchFormSelector);
    this.resultsContainer = document.querySelector(resultsContainerSelector);
    this.loadingElement = document.querySelector(loadingElementSelector);
  }

  setCountryCode() {
    fetch("http://ip-api.com/json")
      .then((results) => results.json())
      .then((results) => {
        this.countryCode = results.countryCode.toLowerCase();
        this.setCurrencySymbol();
      });
  }
}
