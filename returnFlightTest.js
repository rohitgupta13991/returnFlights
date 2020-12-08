var coms =  require('./utilities/commons');
var searchFlight = require('./pageobjects/searchFlightPage');

var EC = protractor.ExpectedConditions;
browser.waitForAngularEnabled(false);
browser.get('https://ixigo.com/');

describe('Browse jobs page automation', function() {

    it('verify search flight results', function() {
        browser.wait(EC.visibilityOf(searchFlight.flight.destinationCity), 60000);
        coms.verifySearchFlight();
    });
});