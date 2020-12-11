var searchFlight = require('../pageobjects/searchFlightPage');
var text = require('../resources/texts.json');
var EC = protractor.ExpectedConditions;

var date = new Date();
var depPrices = {};
var retPrices = {};
exports.getSearchFlight = function () {
    'use strict';
    //Setting dep date as 30 days from current date and ret date as 40 days from current date
    var depDate_ts = date.setDate(date.getDate() + 30);
    var returnDate_ts = date.setDate(date.getDate() + 40);
    var depDate = timestampToDDMMYYYY(depDate_ts);
    var returnDate = timestampToDDMMYYYY(returnDate_ts);

    //Filling details on ixigo.com and clicking search button
    searchFlight.flight.departureCity.sendKeys(text.departureCity);
    browser.wait(EC.textToBePresentInElement(searchFlight.flight.departureCityResult,text.departureCity), 10000);
    searchFlight.flight.departureCityResult.click();
    searchFlight.flight.destinationCity.sendKeys(text.destinationCity);
    browser.wait(EC.textToBePresentInElement(searchFlight.flight.destinationCityResult,text.destinationCity), 10000);
    searchFlight.flight.destinationCityResult.click();
    searchFlight.flight.departureDate.sendKeys(depDate);
    browser.wait(EC.visibilityOf(element(by.css('.flight-dep-cal [data-date="'+depDate+'"]'))), 10000);
    browser.executeScript("arguments[0].scrollIntoView(true);",element(by.css('.flight-dep-cal [data-date="'+depDate+'"]')));
    browser.wait(EC.visibilityOf(element(by.css('.flight-dep-cal [data-date="'+depDate+'"]'))), 10000);
    element(by.css('.flight-dep-cal [data-date="'+depDate+'"]')).click();
    browser.executeScript("arguments[0].scrollIntoView(true);",element(by.css('.flight-ret-cal [data-date="'+returnDate+'"]')));
    browser.wait(EC.visibilityOf(element(by.css('.flight-ret-cal [data-date="'+returnDate+'"]'))), 10000);
    element(by.css('.flight-ret-cal [data-date="'+returnDate+'"]')).click();
    searchFlight.flight.noOfTravellers.sendKeys(text.noOfTravellers);
    browser.executeScript("arguments[0].scrollIntoView(true);",searchFlight.flight.searchButton);
    searchFlight.flight.searchButton.click();
    browser.wait(EC.visibilityOf(searchFlight.flight.searchResult.get(0)), 60000);
    expect(searchFlight.flight.searchResult.length).not.toBeLessThan(20);
};

//Function to convert timestamp to DDMMYYYY format
var timestampToDDMMYYYY = function (ts) {
    var date_ob = new Date(ts);
    var date_year = date_ob.getFullYear();
    var date_month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var date_days = ("0" + date_ob.getDate()).slice(-2);
    var date = date_days+date_month+date_year;
    return date;
};

//Function to fetch dep and ret prices in 2 dictionaries
exports.fetchPrices = async function () {
    'use strict';
    //wait for all the results to load
    browser.sleep(5000);


    var dc =  await searchFlight.flight.depPrices.count().then(function(count){
        return count;
    });
    var rc =  await searchFlight.flight.retPrices.count().then(function(count1) {
        return count1;
    });

    var a = 0, b = 0;
    for (var i=0; i<dc; i++) {
        browser.executeScript("arguments[0].scrollIntoView(true);", searchFlight.flight.depPrices.get(i));
        var price1 = await
        searchFlight.flight.depPrices.get(i).getText().then(function (text) {
            depPrices[a] = parseInt(text);
            a++;
            return text;
        });
    }
    for (var x=0; x<rc; x++) {
        browser.executeScript("arguments[0].scrollIntoView(true);",searchFlight.flight.retPrices.get(i));
        var price2 = await searchFlight.flight.retPrices.get(x).getText().then(function (text) {
            retPrices[b] = parseInt(text);
            b++;
            return text;
        });
    }
};

exports.cheapestCombo = async function () {

    //sorting both the price dictionaries and storing results in 2 different 2D arrays
    var array1 = await Object.keys(depPrices).map(function(key) {
        return [key, depPrices[key]];
    });
    await array1.sort(function(first, second) {
        return first[1] - second[1];
    });
    var array2 = await Object.keys(retPrices).map(function(key) {
        return [key, retPrices[key]];
    });
    await array2.sort(function(first, second) {
        return first[1] - second[1];
    });


    //Logic to calculate top 20 cheapest combos from 2 sorted 2D arrays.
    var index = new Array(20).fill(0);
    var noOfComb = 20;

    if(noOfComb > array1.length * array2.length)
    {
        console.log(noOfComb + " cheapest combo cannot be found");
        return;
    }
    console.log("\n      DEPARTURE                            RETURN");
    while(noOfComb > 0)
    {
        var min_sum = Number.MAX_VALUE;
        var min_index = 0;
        for (var i1 = 0; i1 < array1.length; i1++)
        {
            if (index[i1] < array2.length &&
                (array1[i1][1] + array2[index[i1]][1]) < min_sum)
            {
                min_index = i1;

                min_sum = array1[i1][1] + array2[index[i1]][1];
            }
        }
        var dText = await searchFlight.flight.depFlightNames.get(array1[min_index][0]).getText().then(function (text1)
    {
        return text1;
    });
        var rText = await searchFlight.flight.retFlightNames.get(array2[index[min_index]][0]).getText().then(function (text2)
    {
        return text2;
    });

        console.log("(" + dText + " ₹" +
            array1[min_index][1] + ")           (" + rText + "  ₹" +
            array2[index[min_index]][1] + ") ");

        index[min_index]++;
        noOfComb--;
    }

};
