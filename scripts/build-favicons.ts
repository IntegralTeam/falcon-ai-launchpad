/**
 * Build favicons from the falcon-head silhouette master.
 * Usage: bun scripts/build-favicons.ts
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const PUBLIC = path.join(ROOT, "public");
const SRC_JPG = path.join(PUBLIC, "images/falcon-head-master.jpg");
const SRC_PNG = path.join(PUBLIC, "images/falcon-mark-master.png");

async function loadMark(): Promise<Buffer> {
  const src = fs.existsSync(SRC_JPG) ? SRC_JPG : SRC_PNG;
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  // Knock out near-black backdrop; keep navy silhouette
  for (let i = 0; i < data.length; i += 4) {
    const max = Math.max(data[i]!, data[i + 1]!, data[i + 2]!);
    if (max < 28) data[i + 3] = 0;
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 5 })
    .png()
    .toBuffer();
}

async function squarePad(
  mark: Buffer,
  size: number,
  outPath: string,
  opts?: { bg?: { r: number; g: number; b: number; alpha: number }; padRatio?: number },
) {
  const padRatio = opts?.padRatio ?? 0.1;
  const pad = Math.round(size * padRatio);
  const inner = Math.max(1, size - pad * 2);
  const resized = await sharp(mark)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: opts?.bg ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toFile(outPath);
}

async function main() {
  const mark = await loadMark();
  fs.writeFileSync(path.join(PUBLIC, "images/falcon-mark.png"), mark);

  await squarePad(mark, 512, path.join(PUBLIC, "favicon.png"), { padRatio: 0.1 });
  await squarePad(mark, 32, path.join(PUBLIC, "favicon-32x32.png"), { padRatio: 0.08 });
  await squarePad(mark, 16, path.join(PUBLIC, "favicon-16x16.png"), { padRatio: 0.06 });
  await squarePad(mark, 180, path.join(PUBLIC, "apple-touch-icon.png"), {
    padRatio: 0.14,
    bg: { r: 250, g: 248, b: 244, alpha: 1 },
  });

  fs.writeFileSync(
    path.join(PUBLIC, "favicon.ico"),
    await pngToIco([
      path.join(PUBLIC, "favicon-16x16.png"),
      path.join(PUBLIC, "favicon-32x32.png"),
    ]),
  );

  // SVG embeds cleaned mark for pixel-perfect silhouette
  const mark128 = await sharp(mark)
    .resize(128, 128, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Falcon">
  <image href="data:image/png;base64,${mark128.toString("base64")}" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(PUBLIC, "favicon.svg"), svg);
  fs.writeFileSync(path.join(PUBLIC, "images/falcon-mark.svg"), svg);

  console.log("Favicons rebuilt from falcon head.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
