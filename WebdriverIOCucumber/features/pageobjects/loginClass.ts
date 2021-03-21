import actions from '../pageobjects/action'
class Register
{
    get LinkElement()
    {
        return $("//a[@class='login']");
    }
    clickOnLink()
    {
        actions.clickOn(this.LinkElement);
    }
    get emailElement()
    {
        return $("//input[@id='email_create']");
    }
    enterEmail(text)
    {
        actions.setValueIn(this.emailElement,text);
    }
    get buttonLink()
    {
        return $("//button[@id='SubmitCreate']");
    }
    submitButton()
    {
        actions.clickOn(this.buttonLink);
    }    

//---------------------------------------------------------------------------------------------------------

    get titleLink()
    {
        return $("//input[@id='id_gender1']");
    }
    tickTheTitle()
    {
        this.titleLink.click();
    }
    get userFirstNameElement()
    {
        return $("//input[@id='customer_firstname']");
    }
    get userSecondtNameElement()
    {
        return $("//input[@id='customer_lastname']");
    }
    get passwordElement()
    {
        return $("//input[@id='passwd']");
    }
    
    enterUserFirstName(text)
    {
        actions.setValueIn(this.userFirstNameElement,text);
    }
    enterUserSecondName(text)
    {
        actions.setValueIn(this.userSecondtNameElement,text);
    }
    enterPassword(text)
    {
        actions.setValueIn(this.passwordElement,text);
    }
    
    get daysElement()
    {
        return $("//select[@id='days']");
    }
    selectday(text)
    {
        this.daysElement.selectByAttribute('value',text);
    }

    get monthElement()
    {
        return $("//select[@id='months']");
    }
    selectMonth(text)
    {
        this.monthElement.selectByAttribute('value',text);
    }
    get yearElement()
    {
        return $("//select[@id='years']");
    }
    selectYear(text)
    {
        this.yearElement.selectByAttribute('value',text);
    }
    get offerElement()
    {
        return $("//div[@id='uniform-optin']");
    }
    clickOnOffer()
    {
        actions.clickOn(this.offerElement);
    }

//------------------------------------------------------------------------------------------------------------

    get compnayElement()
    {
        return $("//input[@id='company']");
    }
    get addressElement()
    {
        return $("//input[@id='address1']");
    }
    get address1Element()
    {
        return $("//input[@id='address2']");
    }
    get cityElement()
    {
        return $("//input[@id='city']");
    }
    get stateElement()
    {
        return $("//select[@id='id_state']");
    }
    get pinCodeElement()
    {
        return $("//input[@id='postcode']");
    }
    get countryElement()
    {
        return $("//select[@id='id_country']");
    }
    get mobileNumberElement()
    {
        return $("//input[@id='phone_mobile']");
    }
    get alaisAddressElement()
    {
        return $("//input[@id='alias']");
    }
    get submitButtonElement()
    {
        return $("//button[@id='submitAccount']");
    }
    enterCompnayName(text)
    {
        actions.setValueIn(this.compnayElement,text);
    }
    enterAddress(text)
    {
        actions.setValueIn(this.addressElement,text);
    }
    enterAddressLine1(text)
    {
        actions.setValueIn(this.address1Element,text);
    }
    enterCity(text)
    {
        actions.setValueIn(this.cityElement,text);
    }
    enterState(text)
    {
        this.stateElement.selectByAttribute('value',text);
    }
    enterPinCode(text)
    {
        actions.setValueIn(this.pinCodeElement,text);
    }
    entercountry(text)
    {
        this.countryElement.selectByAttribute('value',text);
    }
    enterMobileNUmber(text)
    {
        actions.setValueIn(this.mobileNumberElement,text);
    }
    enterAlaisAddress(text)
    {
        actions.setValueIn(this.alaisAddressElement,text);
    }
    clickOnSubmitButton()
    {
        actions.clickOn(this.submitButtonElement)
    }

//--------------------------------------------------------------------------------------------------------

    get Womenelement()
    {
        return $("//a[@title='Women']");
    }
    clickOnWomen()
    {
        actions.clickOn(this.Womenelement);
    }
    get dressElement()
    {
        return $("//*[@id='center_column']/ul/li[3]/div/div[1]/div/a[1]/img");
    }
    clickOnselectedress()
    {
        actions.scrollToView(this.dressElement);
        actions.clickOn(this.dressElement);
    }
    get quantityElement()
    {
        return $("//a[@class='btn btn-default button-plus product_quantity_up']");
    }
    addQuantity()
    {
        actions.clickOn(this.quantityElement);
    }
    get addToCartElement()
    {
        return $("//button[@class='exclusive']");
    }
    addToCart()
    {
        actions.clickOn(this.addToCartElement);
    }

//----------------------------------------------------------------------------------------------------

    get proceedToCheckOutElement()
    {
        return $("//a[@title='Proceed to checkout']");
    }
    clickOnProceed()
    {
        actions.clickOn(this.proceedToCheckOutElement);
    }
    get summaryCheckoutElement()
    {
        return $("//a[@class='button btn btn-default standard-checkout button-medium']");
    }
    clickOnNext()
    {
        actions.scrollToView(this.summaryCheckoutElement);
        actions.clickOn(this.summaryCheckoutElement);
    }
    get addressCheckOutElement()
    {
        return $("//button[@class='button btn btn-default button-medium']");
    }
    clickOnNextForShipping()
    {
        actions.scrollToView(this.addressCheckOutElement);
        actions.clickOn(this.addressCheckOutElement);
    }
    get termsAndConditionsElement()
    {
        return $("//input[@id='cgv']");
    }
    clickOnTermsAndConditions()
    {
        this.termsAndConditionsElement.click();
    }
    get proceedToPaymentElement()
    {
        return $("//button[@class='button btn btn-default standard-checkout button-medium']");
    }
    clickOnPayment()
    {
        actions.scrollToView(this.proceedToPaymentElement);
        actions.clickOn(this.proceedToPaymentElement);
    }

//---------------------------------------------------------------------------------------------------------------

    get payByWireElement()
    {
        return $("//a[@title='Pay by bank wire']");
    }
    clickOnPayByBankWire()
    {
        actions.scrollToView(this.payByWireElement);
        actions.clickOn(this.payByWireElement);
    }
    get confirmOrderElement()
    {
        return $("//button[@class='button btn btn-default button-medium']");
    }
    clickOnIConfirmMtOrder()
    {
        actions.clickOn(this.confirmOrderElement);
    }
}
export default new Register();