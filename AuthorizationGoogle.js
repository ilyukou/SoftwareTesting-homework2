var TagManagerHomepage = function() {

    var inputLogin = element(by.id('identifierId'));
    var inputPassword = element(by.css('input.whsOnd.zHQkBf'));
    


    var profileIdentifier = element(by.id('profileIdentifier'));
    var forgetPassword = element(by.css('#forgotPassword > content > span'));

    
    
    this.get = function() {
      browser.get('https://tagmanager.google.com/#/admin/accounts/create');
    };

    this.sendLogin = function(login){
      inputLogin.sendKeys(login);

      let btn = element(by.id('identifierNext'));
      btn.click();
    };

    this.sendPassword = function(password){
      inputPassword.sendKeys(password);

      let btn = element(by.id('passwordNext'));
      btn.click();
    }

    this.waitLoadElement = function(element){
      var EC = protractor.ExpectedConditions;
      var present = EC.presenceOf(element); // wait for it to be added to DOM
      var visible = EC.visibilityOf(element); // wait for it to be visible on page
      browser.wait(EC.and(present, visible), 10000); // wait maximum of 10 seconds
    }
  
};
module.exports = new TagManagerHomepage();