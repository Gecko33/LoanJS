'use strict';

describe('filter', function(){
    it('should filter', function () {
        browser.get('http://localhost:9000/#/');

        var firstElement = element.all(by.repeater('loan in mainCtrl.loans').row(0).column('object')).first();
        expect(firstElement.getText()).toBe('SABRE LASER');

        element(by.model('mainCtrl.search')).sendKeys('tour');
        firstElement = element.all(by.repeater('loan in mainCtrl.loans').row(0).column('object')).first();
        expect(firstElement.getText()).toBe('TOURNEVIS SONIQUE');
    });
});
