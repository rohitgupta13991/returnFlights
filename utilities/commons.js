var searchFlight = require('../pageobjects/searchFlightPage');
var text = require('../resources/texts.json');
var EC = protractor.ExpectedConditions;

var date = new Date();
exports.verifySearchFlight = function () {
    'use strict';
    var depDate = date.setDate(date.getDate() + 30);
    var returnDate = date.setDate(date.getDate() + 40);
    searchFlight.flight.departureCity.sendKeys(text.departureCity);
    searchFlight.flight.destinationCity.sendKeys(text.destinationCity);
    searchFlight.flight.departureDate.sendKeys(depDate);
    searchFlight.flight.returnDate.sendKeys(returnDate);
    searchFlight.flight.noOfTravellers.sendKeys(text.noOfTravellers);
    searchFlight.flight.searchButton.click();
    browser.wait(EC.visibilityOf(searchFlight.flight.searchResult.get(0)), 60000);
    expect(searchFlight.flight.searchResult.length).not.toBeLessThan(20);

};
