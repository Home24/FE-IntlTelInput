// Tell JSHint to ignore this warning: "character may get silently deleted by one or more browsers"
// jshint -W100

// Array of country objects for the flag dropdown.
// Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.
// Originally from https://github.com/mledoze/countries
// then modified using the following JavaScript (NOW OUT OF DATE):

/*
 var result = [];
 _.each(countries, function(c) {
 // ignore countries without a dial code
 if (c.callingCode[0].length) {
 result.push({
 // var locals contains country names with localised versions in brackets
 n: _.findWhere(locals, {
 countryCode: c.cca2
 }).name,
 i: c.cca2.toLowerCase(),
 d: c.callingCode[0]
 });
 }
 });
 JSON.stringify(result);
 */

// then with a couple of manual re-arrangements to be alphabetical
// then changed Kazakhstan from +76 to +7
// and Vatican City from +379 to +39 (see issue 50)
// and Caribean Netherlands from +5997 to +599
// and Curacao from +5999 to +599
// Removed: Åland Islands, Christmas Island, Cocos Islands, Guernsey, Isle of Man, Jersey, Kosovo, Mayotte, Pitcairn Islands, South Georgia, Svalbard, Western Sahara

// Update: converted objects to arrays to save bytes!
// Update: added "priority" for countries with the same dialCode as others
// Update: added array of area codes for countries with the same dialCode as others

// So each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]
// loop over all of the countries above
for (var i = 0; i < allCountries.length; i++) {
  var c = allCountries[i];
  allCountries[i] = {
    name: c[0],
    iso2: c[1],
    dialCode: c[2],
    priority: c[3] || 0,
    areaCodes: c[4] || null
  };
}
