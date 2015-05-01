package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LocationPage extends BasePage{

    By resultPageHeadLine = By.cssSelector("h1");

    public LocationPage(WebDriver driver) {
        super(driver);
        valCorrectPage("yr.no");
    }

    public String getHeadLine() {
        return getText(resultPageHeadLine);
    }

}
