(function () {
  'use strict';

  describe('Home', function () {
    var homePage = require('../../pages/home-page.js'),
        getPageTitle = require('../../helpers/get-page-title-helper.js');

    beforeEach(function () {
      browser.get('/');
    });

    describe('When: open the page', function () {
      it('Should: show the tittle', function () {
        homePage.clickHome();
        expect(getPageTitle()).toBe('Crhoy.com | Periodico Digital | Costa Rica Noticias 24/7');
      });

    });
  });
})();
