import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // test that an event is created and displayed
  await page.getByRole('button', { name: 'add event Add Event' }).click();
  await page.getByLabel('Date').fill('2022-12-24');
  await page.getByLabel('Time').click();
  await page.getByLabel('Time').fill('12:30');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#sport').selectOption('1');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('combobox', { name: 'Home Team' }).selectOption('3');
  await page.getByRole('combobox', { name: 'Away Team' }).selectOption('7');
  await page.getByRole('button', { name: 'Submit' }).click();
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    expect(dialog.message()).toBe('Successful Event Creation');
    dialog.dismiss().catch(() => {});
  });
  await page.getByText('PortugalFootball2022-12-2412:30England').isVisible();
  // test that the event is filtered out when the sport is filtered
  await page
    .getByRole('combobox', { name: 'Filter by sport:' })
    .selectOption('Basketball');
  await page.getByText('PortugalFootball2022-12-2412:30England').isHidden();
});
