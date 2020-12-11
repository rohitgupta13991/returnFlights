var coms =  require('./utilities/commons');
var searchFlight = require('./pageobjects/searchFlightPage');

var EC = protractor.ExpectedConditions;
browser.waitForAngularEnabled(false);
browser.get('https://ixigo.com/');

describe('Return flights automation', function() {

    it('get search flight results', function(done) {
        browser.wait(EC.visibilityOf(searchFlight.flight.roundTrip), 60000);
        searchFlight.flight.roundTrip.click();
        coms.getSearchFlight();
        done();
    });
    it('fetch price in arrays', function (done) {
        coms.fetchPrices();
        done();
    });
    it('find cheapest combo', function (done) {
        coms.cheapestCombo();
        done();
    })
});