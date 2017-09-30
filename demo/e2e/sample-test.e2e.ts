import { AppiumDriver, createDriver, Direction, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";

describe("scenario simple", () => {
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
    });

    after(async () => {
        await driver.quit();
        console.log("Driver quits!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logScreenshoot(this.currentTest.title);
        }
    });


  it("should navigate to Messi details", async () => {
    const messi = await driver.findElementByText("Messi", SearchOptions.contains);

    await messi.tap();

    const detailsPage = await driver.findElementByText("Details", SearchOptions.exact);
    await detailsPage.waitForExist(200);

    assert.isTrue(await detailsPage.isDisplayed());
  });


  it("should verify Messi details", async () => {
    const nrTen = await driver.findElementByText("10", SearchOptions.contains);
    assert.isTrue(await nrTen.isDisplayed());

    const labels = await driver.findElementsByClassName(driver.locators.getElementByName('label'));
    assert.equal(await labels.length, 4);

    const matchesScreen = await driver.compareScreen("messiDetails.png", 1, 0.1);
    assert.isTrue(matchesScreen);
  });


  it("should navigate to overview", async () => {
    await driver.navBack();

    const overviewPage = await driver.findElementByText("My App", SearchOptions.exact);
    assert.isTrue(await overviewPage.isDisplayed());
  });


  it("should scroll the list", async () => {
    const listView = await driver.findElementByClassName(driver.locators.listView);

    const jordiAlba = await listView.scrollTo(
      Direction.down,
      () => driver.findElementByText("Jordi Alba", SearchOptions.contains)
    );

    await jordiAlba.tap();

    const nrEighteeen = await driver.findElementByText("18", SearchOptions.contains);
    assert.isTrue(await nrEighteeen.isDisplayed());

    await driver.navBack();
  });
});