const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://automationpractice.com/index.php');
  await page.locator('text=Sign in').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  await page.locator('text=Email address Password Forgot your password? Sign in >> input[name="email"]').click();
  await page.locator('text=Email address Password Forgot your password? Sign in >> input[name="email"]').fill('cristian.moca94@gmail.com');
  await page.locator('input[name="passwd"]').click();
  await page.locator('input[name="passwd"]').press('CapsLock');
  await page.locator('input[name="passwd"]').fill('C');
  await page.locator('input[name="passwd"]').press('CapsLock');
  await page.locator('input[name="passwd"]').fill('Cristian');
  await page.locator('input[name="passwd"]').press('CapsLock');
  await page.locator('input[name="passwd"]').fill('CristianM');
  await page.locator('input[name="passwd"]').press('CapsLock');
  await page.locator('input[name="passwd"]').fill('CristianMoca12');
  await page.locator('button:has-text("Sign in")').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=my-account');
  await page.locator('.sf-menu > li:nth-child(2) > .sf-with-ul').click();
  await page.waitForURL('http://automationpractice.com/index.php?id_category=8&controller=category');
  await page.locator('text=Add to cart').first().click();
  await page.locator('text=Proceed to checkout').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=order');
  await page.locator('#center_column >> text=Proceed to checkout').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=order&step=1');
  await page.goto('http://automationpractice.com/index.php?controller=order');
  await page.locator('input[name="cgv"]').check();
  await page.locator('button:has-text("Proceed to checkout")').click();
  await page.waitForURL('http://automationpractice.com/index.php?controller=order&multi-shipping=');
  await page.locator('text=Pay by check (order processing will be longer)').click();
  await page.waitForURL('http://automationpractice.com/index.php?fc=module&module=cheque&controller=payment');
  await page.goto('http://automationpractice.com/index.php?controller=order-confirmation&id_cart=4861119&id_module=30&id_order=456395&key=0c78d2e7079cbc7e8395f88d7550d2a1');

  await context.close();
  await browser.close();
})();
