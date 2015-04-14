$("#phone").intlTelInput({
    defaultCountry: 'de',
    preferredCountries: [ "de", "fr", "nl", "at", "ch", "be", "it" ],
    autoPlaceholder: true,
    utilsScript: "../../build/js/utils.min.js" // just for formatting/placeholders etc
});