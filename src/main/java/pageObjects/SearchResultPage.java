package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SearchResultPage extends BasePage{

    By topResultLink = By.xpath("//div[@id='directories']/table/tbody/tr/td[2]/a");

    public SearchResultPage(WebDriver driver) {
        super(driver);
        valCorrectPage("yr.no");
        }

    public LocationPage clickOnTopSearchResultLink() {
        click(topResultLink);
        return new LocationPage(driver);
    }
}
