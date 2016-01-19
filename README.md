# Selenium-cucumber-java-main-test-project
Combines Cucumber with Selenium Webdriver in a Page Object model framework. First test

This project is to test a simple setup involving Cucumber-JVM and WebDriver using Page Object Models and is based on the following sources:

1) The Selenium Guidebook for Java by Dave Haeffner

2) Thomas Sundberg's blog post from 2011 on testing with cucumber and Webdriver: https://thomassundberg.wordpress.com/2011/10/18/testing-a-web-application-with-selenium-2/
(but this project's code abstracts out the Webdriver commands into base page methods to future proof the tests a bit more and make the code itself less verbose)

To run in Chrome - open Run > Edit Configurations
In VM options, add -Dbrowser=chrome

To run in other browsers to execute on locally, download the driver and put it in the vendor folder of this project
Then update the if/else statement in Base.java in the tests package
then update VM options accordingly

SAUCELABS
VM option: -Dhost=saucelabs
(This is entered in the VM options currently for each test).
For local execution: -Dhost=localhost

The saucerest library has been added to the pom.xml so we can set a pass or fail in the saucelabs dashboard instead of just showing as "Finished"

Maven surefire plugin used to parallalize tests - pom.xml updated as per Chapter 14 of Selenium Guidebook for Java

Categories can be set up using Maven surefire - Smoke & Deep categories can be applied to individual @Test or classes
 To run only a subset of tests, use -Dgroups=tests.groups.Smoke or -Dgroups=tests.groups.Deep otherwise all will be run as default (specified in the pom.xml)
 can also use -Dgroups=tests.groups.Shallow,test.groups.Deep

@Override annotation was added to the staring method in tests/Base.java (book does not have this but video walkthrough does and without it,
 saucelabs tests show as "unnamed job" and don't have a "pass" or "fail"

 See Chapter 13 to run tests in saucelabs for applications behind a firewall
