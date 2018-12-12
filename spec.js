var authorizationGooglePage = require('./AuthorizationGoogle');
var tagManagerPage = require('./TagManagerPage');


describe("Tag manager homepage test", function () {
    browser.ignoreSynchronization = true;

    var login = 'email@email.com';
    var password = 'pass'


    it('authorization to Google service', function () {
        browser.ignoreSynchronization = true;

        authorizationGooglePage.get();


        authorizationGooglePage.sendLogin(login);

        //bad code
        browser.waitForAngularEnabled(false);
        browser.driver.sleep(5000);
       
        authorizationGooglePage.sendPassword(password);

        //bad code
        browser.driver.sleep(10000);

        /*
        Like i do in the past:

        span.isPresent().then( function() { // wait load elements 
            expect(span.getText()).toEqual('npm install');          
        });

        All protractor get function give promise like element.property

        span.getText().then( function(spanText) {   //promise = waiting to load text in element
            expect(spanText).toEqual('npm install');          
        });
        
        I need promise element. If Element load, do something with him

        span.functionGetElement().then( function(element) { // promise = waiting to load element
            element.click();
        });
    
        */
              
        // my attempts below

        /*browser.wait(() => {
            browser.waitForAngularEnabled(false);
            browser.isPresent(authorizationGooglePage.inputPassword.first());
        }, 5000); // timeout may not be given*/

        /*browser.waitForAngularEnabled(false).then(function(){
            authorizationGooglePage.sendPassword(password);
            browser.waitForAngularEnabled();
        });

        /*element(by.id('identifierNext')).getAttribute('id').then(function(nameAtrb) {
            nameAtrb.toBe('identifierNext').then(function(){

                authorizationGooglePage.inputLogin.sendKeys(login);
    
                let btn = element(by.id('identifierNext'));
                btn.click();

                browser.driver.sleep(5000);
                authorizationGooglePage.sendLogin(login);    
                browser.driver.sleep(5000);
            });
        });*/        
        /*

        authorizationGooglePage.inputLogin.isEnabled().then(function(){
            authorizationGooglePage.inputLogin.sendKeys(login);

            let btn = element(by.id('identifierNext'));
            btn.click();
        });
         
        browser.driver.sleep(10000);*/
    });

    /*it('authorization to Google service', function () {
        browser.ignoreSynchronization = true;

        authorizationGooglePage.get();
        
        authorizationGooglePage.sendLogin(login);    
        browser.driver.sleep(5000);

        authorizationGooglePage.sendPassword(password);        
        

    });*/    
    
    // next step with promise bug

    /*it('', function(){
        browser.ignoreSynchronization = false;
        //bad code
        browser.waitForAngularEnabled(false);
        browser.driver.sleep(20000);
        
        tagManagerPage.addAccountButtonClick();

        //bad code
        browser.waitForAngularEnabled(false);
        browser.driver.sleep(10000)

        // ...
        
        

    });   */
});