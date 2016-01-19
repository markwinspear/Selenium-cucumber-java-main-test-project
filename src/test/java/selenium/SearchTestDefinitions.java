package selenium;

import com.saucelabs.saucerest.SauceREST;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
 import cucumber.api.java.After;
 import cucumber.api.java.Before;
 import cucumber.api.java.en.*;

import pageObjects.Config;
import pageObjects.HomePage;
  import pageObjects.LocationPage;
  import pageObjects.SearchResultPage;

import java.net.URL;

import static junit.framework.Assert.assertTrue;

//
//TODO: update this class to extend class 'Base' and remove implements Config...
//Comment the @Before and @After annotations here so the system uses those in the base class instead
//result = nullpointer
//if commenting out just the @After, the driver fails to quit
//I have temporarily moved the decision for browser into this setUp method and you can set the browser to be
//firefox or chrome using the argument -Dbrowser=chrome or -Dbrowser=firefox for the time being
//

public class SearchTestDefinitions /* extends Base */ implements Config {
    private WebDriver driver;
    private HomePage home;
    private SearchResultPage searchResult;

    @Before
    public void setUp() {
        if (browser.equals("firefox")) {
            driver = new FirefoxDriver();
        } else {
            if (browser.equals("chrome")) {
                System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/vendor/chromedriver.exe");
                driver = new ChromeDriver();
            }
        }
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("^I want to know the weather forecast for coming days$")
    public void prepareHomePage(){
        home = new HomePage(driver);
    }

    @When("^I search for (.*)$")
    public void search(String location) {
        searchResult = home.searchFor(location);
    }

    @Then("^I should be able to get a weather forecast for (.*)$")
    public void assertTheSearchResult(String locationName) {
        LocationPage locationPage = searchResult.clickOnTopSearchResultLink();
        String actualHeadline = locationPage.getHeadLine();
        assertTrue(actualHeadline.contains(locationName));
    }

}
