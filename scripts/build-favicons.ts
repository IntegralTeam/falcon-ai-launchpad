/**
 * Build favicons from the bordered falcon-head PNG master.
 * Usage: bun scripts/build-favicons.ts
 *
 * ADR: the master is already a 512² transparent PNG with a white outline,
 * so we resize in-place (no knockout / trim / re-pad). Apple touch icons
 * still get a cream fill because iOS ignores alpha.
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(PUBLIC, "favicon-new-border-transparent.png");

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

  const mark = await sharp(SRC).ensureAlpha().png().toBuffer();

  fs.writeFileSync(path.join(PUBLIC, "images/falcon-mark.png"), mark);
  fs.writeFileSync(path.join(PUBLIC, "favicon.png"), mark);

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
      background: { r: 250, g: 248, b: 244, alpha: 1 },
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

  console.log("Favicons rebuilt from bordered falcon mark.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
