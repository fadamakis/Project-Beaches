'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /beaches when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/beaches");
  });


  describe('beaches', function() {

    beforeEach(function() {
      browser.get('index.html#/beaches');
    });


    it('should render beaches when user navigates to /beaches', function() {
      expect(element.all(by.css('.page-header')).getText()).
        toMatch(/Popular beaches in Heraklion, Crete/);
    });

  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#/about');
    });


    it('should render about when user navigates to /about', function() {
      expect(element.all(by.css('.page-header')).getText()).
        toMatch(/About me/);
    });

  });
});
