package selenium;

import cucumber.api.junit.Cucumber;
import cucumber.api.SnippetType;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"src/resources/cucumber"
        },
        snippets = SnippetType.CAMELCASE, plugin = {"pretty", "html:out"}
)

public class TestRunner {
}
