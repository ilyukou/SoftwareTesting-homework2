var TagManagerHomepage = function() {

    var addAccountButton = element(by.css('.btn .blue'));
    
    var form = element(by.tagName('form'));
    var administrationTab = element(by.css('#suite-top-nav > md-nav-bar > div > nav > ul > li:nth-child(3) > a > span'));
        
    this.addAccountButtonClick = function(){
      addAccountButton.click();
    };

    this.get = function() {
      browser.get('https://tagmanager.google.com/#/admin/accounts/create');
    };

};
module.exports = new TagManagerHomepage();