/**
 * Build favicons from the cream rounded-square falcon PNG master.
 * Usage: bun scripts/build-favicons.ts
 *
 * ADR: the export is a 1254² opaque PNG (cream squircle + navy mark on
 * flattened black). Knock out near-black so tab chrome gets transparent
 * corners; don't trim — padding inside the squircle is intentional.
 * Apple touch icons get a cream fill because iOS ignores alpha.
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(PUBLIC, "new-favicon.png");
const CREAM = { r: 245, g: 241, b: 235, alpha: 1 };

async function loadMark(): Promise<Buffer> {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  // Knock out flattened black corners; navy fill maxes around 93 so <40 is safe
  for (let i = 0; i < data.length; i += 4) {
    const max = Math.max(data[i]!, data[i + 1]!, data[i + 2]!);
    if (max < 40) data[i + 3] = 0;
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
}

async function resizePng(src: Buffer, size: number, outPath: string) {
  await sharp(src)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outPath);
}

async function main() {
  if (!fs.existsSync(SRC)) {
    throw new Error(`Missing favicon master: ${SRC}`);
  }

  const mark = await loadMark();

  await resizePng(mark, 512, path.join(PUBLIC, "favicon.png"));
  await resizePng(mark, 512, path.join(PUBLIC, "images/falcon-mark.png"));
  await resizePng(mark, 32, path.join(PUBLIC, "favicon-32x32.png"));
  await resizePng(mark, 16, path.join(PUBLIC, "favicon-16x16.png"));

  // iOS home-screen icon: composite onto cream so the mark stays opaque
  const appleSize = 180;
  const appleMark = await sharp(mark)
    .resize(appleSize, appleSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  await sharp({
    create: {
      width: appleSize,
      height: appleSize,
      channels: 4,
      background: CREAM,
    },
  })
    .composite([{ input: appleMark, gravity: "centre" }])
    .png()
    .toFile(path.join(PUBLIC, "apple-touch-icon.png"));

  fs.writeFileSync(
    path.join(PUBLIC, "favicon.ico"),
    await pngToIco([
      path.join(PUBLIC, "favicon-16x16.png"),
      path.join(PUBLIC, "favicon-32x32.png"),
    ]),
  );

  // SVG wraps a 128px PNG so browsers that prefer SVG still get the silhouette
  const mark128 = await sharp(mark)
    .resize(128, 128, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Falcon">
  <image href="data:image/png;base64,${mark128.toString("base64")}" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(PUBLIC, "favicon.svg"), svg);
  fs.writeFileSync(path.join(PUBLIC, "images/falcon-mark.svg"), svg);

  console.log("Favicons rebuilt from cream squircle falcon mark.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
