const { Builder, By, until } = require("selenium-webdriver");

async function easyqLogin() {

    // Launch Edge browser
    let driver = await new Builder().forBrowser("MicrosoftEdge").build();

    try {
        
    
        // Open URL
        await driver.get("https://beta.easyqsolutions.com/#/easyqsolutions/login");

        // Wait for username input
        await driver.wait(until.elementLocated(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[1]/div[1]/div/div[1]/div[2]/label/mat-label")), 5000);
        await driver.sleep(5000);

        // Enter username-positive scenario
        await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[1]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("paivivek002@gmail.com");
            await driver.sleep(5000);

	// Enter username-negativescenario
      	await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[1]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("7676465765654543");
           await driver.sleep(5000);

	// Enter username-Negative scenario
      	await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[1]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("");
            await driver.sleep(5000);

	// Enter username-Negative scenario
      	await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[1]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("><<+_}|>:*&^%$#");
            await driver.sleep(5000);

        // Enter password-Positive Scenario
        await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[2]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("vivekpai");
            await driver.sleep(5000);

	// Enter password-Negative Scenario
        await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[2]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("112343354654765768");
            await driver.sleep(5000);

	// Enter password-Negative Scenario
        await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[2]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("*(*&*^&&%^$");
            await driver.sleep(5000);

	// Enter password-Negative Scenario
        await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[2]/div[1]/div/div[1]/div[2]/label/mat-label"))
            .sendKeys("");
            await driver.sleep(5000);

     //View Password
            await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field[2]/div[1]/div/div[3]/mat-icon"))
            .click();
            await driver.sleep(5000);

    //Forgot Password
            await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/div[1]/a"))
            .click();
            await driver.sleep(5000);

    //Email field for recovering password
            await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/mat-form-field/div[1]/div/div[2]/input"))
            .sendKeys("paivivek002@gmail.com");
            await driver.sleep(5000);

    //Continue button with proceed the Email Id

            await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/div/button"))
            .click();
            await driver.sleep(5000);
            await driver.navigate().back();

	// Click login button
            await driver.findElement(By.xpath("/html/body/app-root/app-login/section/div/div[2]/div[1]/form/div[2]/button/span"))
            .click();

        // Wait to see result
        await driver.sleep(3000);

    } finally {
        await driver.quit();
    }
}

// Run the test
easyqLogin();