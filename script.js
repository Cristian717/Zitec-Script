const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to http://automationpractice.com/index.php
  await page.goto('http://automationpractice.com/index.php');

  // Click text=Sign in
  await page.locator('text=Sign in').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=authentication&back=my-account');

  // Click text=Email address Password Forgot your password? Sign in >> input[name="email"]
  await page.locator('text=Email address Password Forgot your password? Sign in >> input[name="email"]').click();

  // Fill text=Email address Password Forgot your password? Sign in >> input[name="email"]
  await page.locator('text=Email address Password Forgot your password? Sign in >> input[name="email"]').fill('cristian.moca94@gmail.com');

  // Click input[name="passwd"]
  await page.locator('input[name="passwd"]').click();

  // Press CapsLock
  await page.locator('input[name="passwd"]').press('CapsLock');

  // Fill input[name="passwd"]
  await page.locator('input[name="passwd"]').fill('C');

  // Press CapsLock
  await page.locator('input[name="passwd"]').press('CapsLock');

  // Fill input[name="passwd"]
  await page.locator('input[name="passwd"]').fill('Cristian');

  // Press CapsLock
  await page.locator('input[name="passwd"]').press('CapsLock');

  // Fill input[name="passwd"]
  await page.locator('input[name="passwd"]').fill('CristianM');

  // Press CapsLock
  await page.locator('input[name="passwd"]').press('CapsLock');

  // Fill input[name="passwd"]
  await page.locator('input[name="passwd"]').fill('CristianMoca12');

  // Click button:has-text("Sign in")
  await page.locator('button:has-text("Sign in")').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=my-account');

  // Click .sf-menu > li:nth-child(2) > .sf-with-ul
  await page.locator('.sf-menu > li:nth-child(2) > .sf-with-ul').click();
  await page.waitForURL('http://automationpractice.com/index.php?id_category=8&controller=category');

  // Click text=Add to cart >> nth=0
  await page.locator('text=Add to cart').first().click();

  // Click text=Proceed to checkout
  await page.locator('text=Proceed to checkout').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=order');

  // Click #center_column >> text=Proceed to checkout
  await page.locator('#center_column >> text=Proceed to checkout').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=order&step=1');

  // Go to http://automationpractice.com/index.php?controller=order
  await page.goto('http://automationpractice.com/index.php?controller=order');

  // Check input[name="cgv"]
  await page.locator('input[name="cgv"]').check();

  // Click button:has-text("Proceed to checkout")
  await page.locator('button:has-text("Proceed to checkout")').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=order&multi-shipping=');

  // Click text=Pay by check (order processing will be longer)
  await page.locator('text=Pay by check (order processing will be longer)').click();
  await page.waitForURL('http://automationpractice.com/index.php?fc=module&module=cheque&controller=payment');

  // Go to http://automationpractice.com/index.php?controller=order-confirmation&id_cart=4861119&id_module=30&id_order=456395&key=0c78d2e7079cbc7e8395f88d7550d2a1
  await page.goto('http://automationpractice.com/index.php?controller=order-confirmation&id_cart=4861119&id_module=30&id_order=456395&key=0c78d2e7079cbc7e8395f88d7550d2a1');

  // ---------------------
  await context.close();
  await browser.close();
})();