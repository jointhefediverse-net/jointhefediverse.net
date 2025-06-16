import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sleep from "./sleep.js";

export default async () => {
  console.log("taking screenshots...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  page.on("console", (message) => {
    const messageText = message.text();
    if (messageText.includes("DEBUG:")) {
      console.log("browser console log:", message.text());
    }
  });

  await page.setViewport({ width: 920, height: 920 });

  try {
    await page.goto("https://jointhefediverse.net/", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector("#language-switcher", { timeout: 10000 });

    const languages = await page.evaluate(() => {
      const select = document.getElementById("language-switcher");
      return Array.from(select.options).map((option) => ({
        value: option.value,
        text: option.text,
      }));
    });

    console.log(`found ${languages.length} languages:`, languages);

    const screenshotDir = "./screenshots";

    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    const filteredLanguages = languages.filter((lang) => lang.value);

    for (const [i, lang] of filteredLanguages.entries()) {
      console.log(`processing language ${lang.text} (${lang.value})...`);

      await page.select("#language-switcher", lang.value);
      await sleep(5000);

      const filename = `${lang.value}.png`;
      const filepath = path.join(screenshotDir, filename);

      await page.addStyleTag({ content: ".navbar,.btn{display:none}" });
      await page.screenshot({
        path: filepath,
        fullPage: false,
      });

      console.log(`screenshot saved to ${filename}...`);
    }
  } catch (error) {
    console.error("error:", error);
  } finally {
    await browser.close();
  }
};
