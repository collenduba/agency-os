import { chromium } from 'playwright-core';
const browser = await chromium.launch({
  headless: true,
  executablePath: '/home/collenduba/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

const colors = await page.evaluate(() => {
  const style = getComputedStyle(document.documentElement);
  const props = [
    '--ui-primary', '--color-primary-DEFAULT', '--color-primary-500',
    '--ui-gray',
    '--color-primary-50', '--color-primary-100', '--color-primary-200',
    '--color-primary-300', '--color-primary-400', '--color-primary-500',
    '--color-primary-600', '--color-primary-700', '--color-primary-800', '--color-primary-900',
    '--color-primary-950',
    '--font-sans', '--font-display', '--font-mono',
  ];
  const result = {};
  for (const p of props) {
    const val = style.getPropertyValue(p);
    if (val) result[p] = val.trim();
  }
  return result;
});

console.log('CSS Variables:', JSON.stringify(colors, null, 2));
const screenshot = await page.screenshot({ fullPage: true });
console.log('Screenshot taken, size:', screenshot.length);
await browser.close();
