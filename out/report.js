$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "description": "",
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1823901,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Locate Stockholm",
  "description": "",
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-stockholm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for Stockholm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to get a weather forecast for Stockholm",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTestDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 145412972,
  "error_message": "java.lang.NullPointerException\r\n\tat pageObjects.BasePage.visit(BasePage.java:46)\r\n\tat pageObjects.HomePage.\u003cinit\u003e(HomePage.java:11)\r\n\tat selenium.SearchTestDefinitions.prepareHomePage(SearchTestDefinitions.java:74)\r\n\tat ✽.Given I want to know the weather forecast for coming days(Search.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 13
    }
  ],
  "location": "SearchTestDefinitions.search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 47
    }
  ],
  "location": "SearchTestDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 119743,
  "error_message": "java.lang.NullPointerException\r\n\tat selenium.SearchTestDefinitions.tearDown(SearchTestDefinitions.java:69)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:78)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:212)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:68)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:140)\r\n",
  "status": "failed"
});
});