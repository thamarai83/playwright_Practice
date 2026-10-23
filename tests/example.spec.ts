import { test, expect } from '@playwright/test';

test('iframe test', async ({ page }) => {
await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');
await page.locator("#accordionExample");
const frame = page.frameLocator("#iframe");
const followingIframes = frame.locator(
  '//h2[normalize-space(.)="Iframe 2"]/following-sibling::iframe'
);
const precedingFrame = page.frameLocator(
  '//h2[normalize-space(.)="Iframe 2"]/preceding-sibling::iframe'
);

await precedingFrame.locator('a[href="https://www.tutorialspoint.com"]').click();
await followingIframes.locator('a[href="https://www.tutorialspoint.com"]').click();

});
test('iframe',async ({ page }) => {


  await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
  const frame2 = page.frameLocator("#frm2");
  await frame2.getByPlaceholder('Enter First Name').fill('Taylor');
  await frame2.getByPlaceholder('Enter Last Name').fill('Smith');
  await frame2.locator('#malerb').check();
  await frame2.locator('#englishchbx').check();
  await frame2.locator('#hindichbx').check();
  await frame2.locator('#email').fill('taylor@example.com');
  await frame2.locator('#password').fill('ExamplePassword123');
  // Optional: submit the form
  // await frame2.locator('#registerbtn').click();
});

test('nested iframe',async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
  await page.locator('//li[@id="iFrame"]').click();
  const frame1 = page.frameLocator('//iframe[@name="globalSqa"]');
await frame1.locator('//img[@data-image-title="JMeterTraining"]/ancestor::a[@class="pic_info_link_type6"]').click();
await page.getByRole('link', { name: 'Drag And Drop' }).click();
await page.waitForTimeout(2000);

const frame2 = page.frameLocator('//h2[normalize-space(.)="Photo Manager"]/following-sibling::div[@rel-title="Photo Manager"]//iframe[@class="demo-frame"]');
await frame2.locator('#gallery > li').first().dragTo(frame2.locator('#trash'));
//await frame2.locator('#draggable').dragTo(frame2.locator('#droppable'));
await page.waitForTimeout(5000);
});

