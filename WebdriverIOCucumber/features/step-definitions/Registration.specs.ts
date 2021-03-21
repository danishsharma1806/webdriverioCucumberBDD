import { Given, When, Then } from '@cucumber/cucumber';
import registration from '../pageobjects/loginClass';
import randomEmail from '../pageobjects/Email';
import {expect} from 'chai';
import action from '../pageobjects/action';


Given('User is on landing page and is able to click signIn button', function () 
{
  browser.url("http://automationpractice.com/");
  registration.clickOnLink();
});

When('User should be able to create an account by giving legit email Id', function () 
{
  registration.enterEmail(randomEmail.makeRandomEmail());
  registration.submitButton();  
});

Then('User should be able to  fill personal details', function (dataTable) 
{
  const title=action.getTitle();
  expect(randomEmail.titles.Login).to.equal(title);
  registration.tickTheTitle();
  registration.enterUserFirstName(dataTable.hashes()[0].FirstName);
  registration.enterUserSecondName(dataTable.hashes()[0].LastName);
  registration.enterPassword(dataTable.hashes()[1].FirstName);
  registration.selectday(dataTable.hashes()[1].LastName);
  registration.selectMonth(dataTable.hashes()[2].FirstName);
  registration.selectYear(dataTable.hashes()[2].LastName);
  registration.clickOnOffer();
});

Then('User should be able to fill address details', function (dataTable) 
{
  registration.enterCompnayName(dataTable.hashes()[3].FirstName);
  registration.enterAddress(dataTable.hashes()[0].Address1);
  registration.enterAddressLine1(dataTable.hashes()[0].Address2);
  registration.enterCity(dataTable.hashes()[1].Address1);
  registration.enterState(dataTable.hashes()[1].Address2);
  registration.enterPinCode(dataTable.hashes()[2].Address1);
  registration.entercountry(dataTable.hashes()[2].Address2);
  registration.enterMobileNUmber(dataTable.hashes()[3].Address1);
  registration.enterAlaisAddress(dataTable.hashes()[3].Address2);
  registration.clickOnSubmitButton();
  const title=action.getTitle();
  expect(randomEmail.titles.Regitration).to.equal(title);
});

Then('User should be able to add the dress to the cart', function () 
{
  registration.clickOnWomen();
  const title=action.getTitle();
  expect(randomEmail.titles.WomenCollction).to.equal(title);
  registration.clickOnselectedress();
  registration.addQuantity();
  registration.addToCart();
});

Then('User should be able to proceed to checkout', function () 
{
  registration.clickOnProceed();
  const title=action.getTitle();
  expect(randomEmail.titles.Order).to.equal(title);
  registration.clickOnNext();
  registration.clickOnNextForShipping();
  registration.clickOnTermsAndConditions();
  registration.clickOnPayment();
});

Then('User should be able to place and confirm order', function () 
{
  registration.clickOnPayByBankWire();
  const title=action.getTitle();
  expect(randomEmail.titles.Payement).to.equal(title);
  registration.clickOnIConfirmMtOrder();
  const title1=action.getTitle();
  expect(randomEmail.titles.ConfirmOrder).to.equal(title1);
});
