var searchFlightPage = function () {
    'use strict';

    //************** elements ********************
    this.roundTrip = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > nav > span:nth-child(2) > span'));
    this.departureCity = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.orgn.u-ib.u-v-align-bottom.u-text-left > div > div.c-input-cntr > input'));
    this.destinationCity = element.all(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.dstn.u-ib.u-v-align-bottom.u-text-left > div > div.c-input-cntr > input'));
    this.departureDate = element.all(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.date.u-ib.u-text-left > div > div.from-date.u-ib > div > input'));
    this.returnDate = element.all(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.date.u-ib.u-text-left > div > div.to-date.u-ib.u-pos-rel > div.c-input-cntr > input'));
    this.noOfTravellers =  element.all(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.passenger.u-ib.u-v-align-bottom.u-text-left > div > div > input'));
    this.searchButton = element(by.css('#content > div > div.banner > div.form-cntr.flight > div > div > div.search.u-ib.u-v-align-bottom > button'));
    this.searchResult = element.all(by.css('#content > div > div.page-content.u-layout-2-col > div.u-ib.u-layout-col-1 > div > div.result-wrpr > div.result-col.outr > div > div > div.summary-section > div.price-group > div > div'));
};

module.exports = {
    flight: new searchFlightPage()
};