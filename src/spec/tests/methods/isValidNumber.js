"use strict";

describe("isValidNumber:", function() {

  beforeEach(function() {
    intlSetup(true);
    input = $("<input>");
  });

  afterEach(function() {
    input.intlTelInput("destroy");
    input = null;
  });




  describe("init plugin and call public method isValidNumber", function() {

    beforeEach(function() {
      input.intlTelInput({
        // we must disable formatting to test with alpha chars
        autoFormat: false,
      });
    });

    it("returns true for: valid intl number", function() {
      input.intlTelInput("setNumber", "+380 93 1948839");
      expect(input.intlTelInput("isValidNumber")).toBeTruthy();
    });

    it("returns false for: invalid intl number", function() {
      input.intlTelInput("setNumber", "+380 93 19488");
      expect(input.intlTelInput("isValidNumber")).toBeFalsy();
    });

    /*it("returns false for: valid intl number containing alpha chars", function() {
      input.intlTelInput("setNumber", "+44 7733 123 abc");
      expect(input.intlTelInput("isValidNumber")).toBeFalsy();
    });*/

  });


  describe("init plugin with nationalMode=true and call public method isValidNumber", function() {

    beforeEach(function() {
      input.intlTelInput({
        nationalMode: true
      });
    });

    it("returns false for: incorrect selected country, valid number", function() {
      input.intlTelInput("setNumber", "93 1948839");
      expect(input.intlTelInput("isValidNumber")).toBeFalsy();
    });

    it("returns true for: correct selected country, valid number", function() {
      input.intlTelInput("selectCountry", "ua");
      input.intlTelInput("setNumber", "93 1948839");
      expect(input.intlTelInput("isValidNumber")).toBeTruthy();
    });

    it("returns false for: correct selected country, invalid number", function() {
      input.intlTelInput("selectCountry", "ua");
      input.intlTelInput("setNumber", "93194883");
      expect(input.intlTelInput("isValidNumber")).toBeFalsy();
    });

  });

});