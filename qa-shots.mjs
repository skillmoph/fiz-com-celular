import puppeteer from 'puppeteer-core';

const base = process.argv[2]; // URL base
const tag = process.argv[3]; // before|after
const out = process.argv[4] || '/tmp/shots2';

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-gpu'],
});
const report = {url: base, pages: []};

for (const w of [1280, 390, 320]) {
  const page = await browser.newPage();
  await page.setViewport({width: w, height: 844, deviceScaleFactor: 1});
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + String(e).slice(0, 200)));
  await page.goto(base + '?utm_source=qa&utm_campaign=astryx', {waitUntil: 'networkidle2', timeout: 45000});
  // rola a página inteira para disparar lazy-load, depois força os reveals
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const t = setInterval(() => {
        y += 700;
        window.scrollTo(0, y);
        if (y >= document.body.scrollHeight) { clearInterval(t); res(); }
      }, 120);
    });
  });
  await new Promise((r) => setTimeout(r, 1200));
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({path: `${out}/${tag}-${w}.png`, fullPage: true});
  const audit = await page.evaluate(() => {
    const ctas = [...document.querySelectorAll('a[data-cta]')];
    return {
      ctaCount: ctas.length,
      ctaHrefs: [...new Set(ctas.map((a) => a.getAttribute('href')))],
      ctaAllHotmart: ctas.every((a) => (a.getAttribute('href') || '').startsWith('https://pay.hotmart.com/U63087062A')),
      utmForwarded: ctas.length > 0 && ctas.every((a) => a.href.includes('utm_source=qa')),
      hasGtag: !!document.querySelector('script[src*="googletagmanager.com/gtag"]'),
      hasClarity: (document.documentElement.innerHTML.includes('clarity.ms/tag/zh9d1og7dn')),
      hasOpenfunnel: !!document.querySelector('script[src*="openfunnel-production"]'),
      images: [...document.images].map((i) => ({src: i.getAttribute('src'), ok: i.complete && i.naturalWidth > 0})).filter((i) => !i.ok),
      title: document.title,
      h1: document.querySelector('h1') ? document.querySelector('h1').textContent : null,
      collap: document.querySelectorAll('.acc').length,
      stickBtn: !!document.querySelector('#stick a[data-cta]'),
    };
  });
  report.pages.push({width: w, errors, audit});
  await page.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 2));
