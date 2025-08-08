import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

async function crawl(url, slug) {
  const browser = await puppeteer.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  // …save HTML…


  // Save the fully rendered HTML for later conversion
  const html = await page.content();
  await fs.writeFile(path.join('scraped', `${slug}.html`), html);

  // TODO: fetch linked CSS/JS if needed

} finally {
  await browser.close();
}
}

crawl(
  'https://www.osmo.supply/resource/scaling-element-on-scroll-gsap-flip',
  'effect-page'
);