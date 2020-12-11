var searchFlightPage = function () {
    'use strict';

    //************** elements ********************
    this.roundTrip = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > nav > span:nth-child(2) > span'));
    this.departureCity = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.orgn.u-ib.u-v-align-bottom.u-text-left > div > div.c-input-cntr > input'));
    this.departureCityResult = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.orgn.u-ib.u-v-align-bottom.u-text-left > div > div.autocompleter-results.u-box.autocompleter-results-caret > div > div.result-row.flight-airport.u-box-result.selected > div > div.city-row > div'));
    this.destinationCity = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.dstn.u-ib.u-v-align-bottom.u-text-left > div > div.c-input-cntr > input'));
    this.destinationCityResult = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.dstn.u-ib.u-v-align-bottom.u-text-left > div > div.autocompleter-results.u-box.autocompleter-results-caret > div > div.result-row.flight-airport.u-box-result.selected > div > div.city-row > div'));
    this.departureDate = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.date.u-ib.u-text-left > div > div.from-date.u-ib > div > input'));
    this.noOfTravellers =  element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.passenger.u-ib.u-v-align-bottom.u-text-left > div > div > input'));
    this.searchButton = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.search.u-ib.u-v-align-bottom > button'));
    this.searchResult = element.all(by.css('#content > div > div.page-content.u-layout-2-col > div.u-ib.u-layout-col-1 > div > div.result-wrpr > div.result-col.outr > div > div > div.summary-section > div.price-group > div > div'));

    this.depPrices = element.all(by.css('#content > div > div.page-content.u-layout-2-col > div.u-ib.u-layout-col-1 > div > div.result-wrpr > div.result-col.outr > div > div.c-flight-listing-split-row > div.summary-section > div.price-group > div > div > span:nth-child(2)'));
    this.retPrices = element.all(by.css('#content > div > div.page-content.u-layout-2-col > div.u-ib.u-layout-col-1 > div > div.result-wrpr > div:nth-child(2) > div > div.c-flight-listing-split-row > div.summary-section > div.price-group > div > div > span:nth-child(2)'));

    this.depFlightNames = element.all(by.css('#content > div > div.page-content.u-layout-2-col > div.u-ib.u-layout-col-1 > div > div.result-wrpr > div.result-col.outr > div > div.c-flight-listing-split-row > div.summary-section > div.time-group > div.airline-text > div'));
    this.retFlightNames = element.all(by.css('#content > div > div.page-content.u-layout-2-col > div.u-ib.u-layout-col-1 > div > div.result-wrpr > div:nth-child(2) > div > div.c-flight-listing-split-row > div.summary-section > div.time-group > div.airline-text > div'));
};

module.exports = {
    flight: new searchFlightPage()
};