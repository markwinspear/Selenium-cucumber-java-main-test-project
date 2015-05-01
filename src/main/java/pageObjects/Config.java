package pageObjects;

/**
 * contains a number of constants which can be set as arguments into the program
 * else uses default values and runs locally
 */
public interface Config {

    String baseUrl        = System.getProperty("baseUrl", "http://www.yr.no"); //2nd param is the default to use
    String browser        = System.getProperty("browser", "firefox");

    //to support executing using SauceLabs
    String host           = System.getProperty("host", "localhost"); //or "saucelabs"
    String browserVersion = System.getProperty("browserVersion", "35");
    String platform       = System.getProperty("platform", "Windows 8.1");

    //These details can be stored as environment variables then replace with System.getenv("SAUCE_USERNAME") and "SAUCE_ACCESS_KEY"
    String sauceUser = "markwinspear";
    String sauceKey = "0b03dcb1-949b-4261-ad9f-1a465421e779";

}