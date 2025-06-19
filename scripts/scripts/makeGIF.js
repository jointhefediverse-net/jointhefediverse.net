import fs from "fs";
import path from "path";
import { createCanvas, loadImage } from "canvas";
import GIFEncoder from "gifencoder";

console.log("making a GIF...");

const screenshotsDir = path.resolve("./screenshots");
const outputGifPath = path.resolve("./screenshots.gif");

const getScreenshots = () => {
  return fs
    .readdirSync(screenshotsDir)
    .filter((file) => file.endsWith(".png"))
    .sort();
};

const files = getScreenshots();

if (files.length === 0) {
  console.error("no screenshots found");
} else {
  // const width = 500;
  // const height = 500;

  const firstImage = await loadImage(path.join(screenshotsDir, files[0]));
  const width = firstImage.width;
  const height = firstImage.height;

  const encoder = new GIFEncoder(width, height);
  encoder.createReadStream().pipe(fs.createWriteStream(outputGifPath));

  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(1000);
  encoder.setQuality(1); // 1-30, default: 10

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  for (const file of files) {
    console.log(`adding ${file}...`);
    const image = await loadImage(path.join(screenshotsDir, file));
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, 0, 0, width, height);
    encoder.addFrame(ctx);
  }

  encoder.finish();
  console.log(`GIF saved as ${outputGifPath}`);
}
