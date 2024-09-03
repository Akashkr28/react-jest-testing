import { test } from '@playwright/test';

test('should render the button', async ( { page } ) => {
    await page.goto('/'); //Go to the home page
    await page.waitForSelector('button'); // Wait for the button to be rendered
    //take a screenshot
    await page.screenshot({ path: `screenshots/ss-${page.viewportSize().width}.png`});
});
