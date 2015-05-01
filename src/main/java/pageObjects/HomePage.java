package pageObjects;

import org.openqa.selenium.*;

public class HomePage extends BasePage {

    By searchField = By.id("sted");

    public HomePage(WebDriver driver) {
        super(driver);
        visit(baseUrl + "/");
    }

    public SearchResultPage searchFor(String location) {
        try {
            clear(searchField);
            type(location, searchField);
            submit(searchField);
        }
        catch (RuntimeException e) {
            takeScreenshot(e, "searchError");
        }
        return new SearchResultPage(driver);
    }



}
