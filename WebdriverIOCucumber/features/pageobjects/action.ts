class Actions
{
    clickOn(element)
    {
        element.waitForDisplayed();
        element.click();
    }
    setValueIn(element, value : string)
    {
        element.waitForDisplayed();
        element.setValue(value);
    }
    moveToElement(element)
    {
        element.waitForDisplayed();
        element.moveTo();
    }
    scrollToView(element)
    {
        element.scrollIntoView();
    }
    getTitle()
    {
        return browser.getTitle();
    }
}
export default new Actions();