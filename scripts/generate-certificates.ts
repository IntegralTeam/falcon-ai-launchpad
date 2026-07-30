/**
 * Generate Falcon certificate PDFs in Expert Institute editorial style.
 * Preserves LMS form fields: FullName, Class, Awarded, Id, Link,
 * Class_description, Credits, Score.
 *
 * Usage: bun scripts/generate-certificates.ts
 */
import fs from "node:fs";
import path from "node:path";
import {
  PDFDocument,
  PDFFont,
  PDFPage,
  rgb,
  StandardFonts,
} from "pdf-lib";

const ROOT = path.resolve(import.meta.dir, "..");
const A4_LANDSCAPE = { width: 841.8898, height: 595.2756 };

const NAVY = rgb(0x10 / 255, 0x2a / 255, 0x43 / 255);
const GREEN = rgb(0x14 / 255, 0x7a / 255, 0x43 / 255);
const RED = rgb(0xc6 / 255, 0x28 / 255, 0x32 / 255);
const GREY = rgb(0x5f / 255, 0x66 / 255, 0x6b / 255);
const LINE = rgb(0xd8 / 255, 0xd4 / 255, 0xcc / 255);
const PAPER = rgb(0xfa / 255, 0xf8 / 255, 0xf4 / 255);
const WHITE = rgb(1, 1, 1);
const INK = rgb(0x17 / 255, 0x24 / 255, 0x2e / 255);

const SAMPLE = {
  FullName: "Michael Anderson",
  Class: "Course 01 - AI Fundamentals for Business Decision-Makers",
  Awarded: "24 Jun 2026",
  Id: "6a3b72afaa472b73470994cf",
  Link: "https://mycourse.app/UFzyCK5C7eHw8fqAV",
};

type Fonts = {
  serif: PDFFont;
  serifBold: PDFFont;
  sans: PDFFont;
  sansBold: PDFFont;
};

function drawUaeRule(page: PDFPage, x: number, y: number, w = 72) {
  const redW = w * 0.35;
  page.drawRectangle({ x, y, width: redW, height: 3, color: RED });
  page.drawRectangle({ x: x + redW, y, width: w - redW, height: 3, color: GREEN });
}

function drawCornerBrackets(page: PDFPage, w: number, h: number) {
  const m = 28;
  const len = 22;
  const stroke = { color: LINE, thickness: 1 };
  // top-left
  page.drawLine({ start: { x: m, y: h - m }, end: { x: m + len, y: h - m }, ...stroke });
  page.drawLine({ start: { x: m, y: h - m }, end: { x: m, y: h - m - len }, ...stroke });
  // top-right
  page.drawLine({ start: { x: w - m, y: h - m }, end: { x: w - m - len, y: h - m }, ...stroke });
  page.drawLine({ start: { x: w - m, y: h - m }, end: { x: w - m, y: h - m - len }, ...stroke });
  // bottom-left
  page.drawLine({ start: { x: m, y: m }, end: { x: m + len, y: m }, ...stroke });
  page.drawLine({ start: { x: m, y: m }, end: { x: m, y: m + len }, ...stroke });
  // bottom-right
  page.drawLine({ start: { x: w - m, y: m }, end: { x: w - m - len, y: m }, ...stroke });
  page.drawLine({ start: { x: w - m, y: m }, end: { x: w - m, y: m + len }, ...stroke });
}

function drawWingArcs(page: PDFPage, w: number, h: number) {
  // Subtle concentric arcs on the right (editorial wing motif)
  for (let i = 0; i < 5; i++) {
    const r = 180 + i * 48;
    page.drawCircle({
      x: w + 40,
      y: h * 0.55,
      size: r,
      borderColor: rgb(0.1, 0.16, 0.26),
      borderOpacity: 0.06,
      borderWidth: 1.2,
      opacity: 0,
    });
  }
}

async function buildBase(embedValues = false) {
  const doc = await PDFDocument.create();
  const page = doc.addPage([A4_LANDSCAPE.width, A4_LANDSCAPE.height]);
  const { width: w, height: h } = page.getSize();

  const fonts: Fonts = {
    serif: await doc.embedFont(StandardFonts.TimesRoman),
    serifBold: await doc.embedFont(StandardFonts.TimesRomanBold),
    sans: await doc.embedFont(StandardFonts.Helvetica),
    sansBold: await doc.embedFont(StandardFonts.HelveticaBold),
  };

  // Paper background
  page.drawRectangle({ x: 0, y: 0, width: w, height: h, color: PAPER });

  // Left UAE stripe (green / white / red) — FEI final-cta motif
  page.drawRectangle({ x: 0, y: 0, width: 8, height: h * 0.48, color: GREEN });
  page.drawRectangle({ x: 0, y: h * 0.48, width: 8, height: h * 0.1, color: WHITE });
  page.drawRectangle({ x: 0, y: h * 0.58, width: 8, height: h * 0.42, color: RED });

  drawWingArcs(page, w, h);
  drawCornerBrackets(page, w, h);

  // Logo
  const logoBytes = fs.readFileSync(path.join(ROOT, "public/images/falcon-logo-horizontal.png"));
  const logo = await doc.embedPng(logoBytes);
  const logoW = 250;
  const logoH = (logo.height / logo.width) * logoW;
  page.drawImage(logo, {
    x: 56,
    y: h - 56 - logoH,
    width: logoW,
    height: logoH,
  });

  // Title
  const title = "CERTIFICATE OF COMPLETION";
  const titleSize = 28;
  page.drawText(title, {
    x: 56,
    y: h - 150,
    size: titleSize,
    font: fonts.serifBold,
    color: NAVY,
  });

  drawUaeRule(page, 56, h - 168, 90);

  // Labels + content column
  const left = 56;
  page.drawText("THIS CERTIFIES THAT", {
    x: left,
    y: h - 210,
    size: 9,
    font: fonts.sansBold,
    color: GREY,
  });

  // Name underline area
  page.drawLine({
    start: { x: left, y: 275 },
    end: { x: left + 560, y: 275 },
    thickness: 0.6,
    color: LINE,
  });

  page.drawText("HAS SUCCESSFULLY COMPLETED", {
    x: left,
    y: 240,
    size: 9,
    font: fonts.sansBold,
    color: GREY,
  });

  page.drawLine({
    start: { x: left, y: 198 },
    end: { x: left + 560, y: 198 },
    thickness: 0.6,
    color: LINE,
  });

  // Date block
  page.drawText("DATE", {
    x: left,
    y: 132,
    size: 8,
    font: fonts.sansBold,
    color: GREY,
  });
  page.drawRectangle({ x: left + 42, y: 134, width: 5, height: 5, color: GREEN });

  // Bottom meta divider
  page.drawLine({
    start: { x: left, y: 112 },
    end: { x: w - 56, y: 112 },
    thickness: 0.7,
    color: LINE,
  });

  // Certificate ID block
  page.drawRectangle({
    x: left,
    y: 78,
    width: 18,
    height: 18,
    borderColor: NAVY,
    borderWidth: 1,
  });
  page.drawText("ID", {
    x: left + 3.5,
    y: 83,
    size: 7,
    font: fonts.sansBold,
    color: NAVY,
  });
  page.drawText("CERTIFICATE ID", {
    x: left + 64,
    y: 72,
    size: 7,
    font: fonts.sansBold,
    color: GREY,
  });

  // Verification link block
  page.drawRectangle({
    x: 360,
    y: 78,
    width: 18,
    height: 18,
    borderColor: NAVY,
    borderWidth: 1,
  });
  page.drawText("URL", {
    x: 362.5,
    y: 83,
    size: 6,
    font: fonts.sansBold,
    color: NAVY,
  });
  page.drawText("VERIFICATION LINK", {
    x: 414,
    y: 72,
    size: 7,
    font: fonts.sansBold,
    color: GREY,
  });

  // Footer licence
  page.drawText("Falcon Innovation Academy FZ-LLC  |  License No: 52001001", {
    x: left,
    y: 36,
    size: 8,
    font: fonts.sans,
    color: GREY,
  });

  // Knowledge tagline (editorial)
  page.drawText("Knowledge. Intelligence. Impact.", {
    x: w - 220,
    y: 36,
    size: 8,
    font: fonts.serif,
    color: NAVY,
  });

  // Form fields (same names/rough positions as original for LMS compatibility)
  const form = doc.getForm();

  const fullName = form.createTextField("FullName");
  fullName.addToPage(page, {
    x: 64,
    y: 277,
    width: 560,
    height: 42,
    textColor: NAVY,
    backgroundColor: PAPER,
    borderColor: PAPER,
    borderWidth: 0,
  });
  fullName.setFontSize(26);
  fullName.updateAppearances(fonts.serifBold);

  const classField = form.createTextField("Class");
  classField.addToPage(page, {
    x: 64,
    y: 202,
    width: 560,
    height: 28,
    textColor: INK,
    backgroundColor: PAPER,
    borderWidth: 0,
  });
  classField.setFontSize(14);
  classField.updateAppearances(fonts.sansBold);

  const awarded = form.createTextField("Awarded");
  awarded.addToPage(page, {
    x: 65,
    y: 145,
    width: 170,
    height: 18,
    textColor: INK,
    backgroundColor: PAPER,
    borderWidth: 0,
  });
  awarded.setFontSize(11);
  awarded.updateAppearances(fonts.sans);

  const id = form.createTextField("Id");
  id.addToPage(page, {
    x: 129,
    y: 86,
    width: 205,
    height: 16,
    textColor: INK,
    backgroundColor: PAPER,
    borderWidth: 0,
  });
  id.setFontSize(9);
  id.updateAppearances(fonts.sans);

  const link = form.createTextField("Link");
  link.addToPage(page, {
    x: 414,
    y: 86,
    width: 340,
    height: 16,
    textColor: INK,
    backgroundColor: PAPER,
    borderWidth: 0,
  });
  link.setFontSize(9);
  link.updateAppearances(fonts.sans);

  // Hidden LMS extras (tiny, bottom-left)
  for (const [name, x] of [
    ["Class_description", 25],
    ["Credits", 40],
    ["Score", 55],
  ] as const) {
    const f = form.createTextField(name);
    f.addToPage(page, {
      x,
      y: 22,
      width: 12,
      height: 8,
      textColor: PAPER,
      backgroundColor: PAPER,
      borderWidth: 0,
    });
    f.setFontSize(1);
  }

  if (embedValues) {
    fullName.setText(SAMPLE.FullName);
    classField.setText(SAMPLE.Class);
    awarded.setText(SAMPLE.Awarded);
    id.setText(SAMPLE.Id);
    link.setText(SAMPLE.Link);
    fullName.updateAppearances(fonts.serifBold);
    classField.updateAppearances(fonts.sansBold);
    awarded.updateAppearances(fonts.sans);
    id.updateAppearances(fonts.sans);
    link.updateAppearances(fonts.sans);
  }

  return { doc, form, fonts };
}

async function writePreviewFlattened(outPath: string) {
  // Preview without form chrome — draw sample text directly
  const doc = await PDFDocument.create();
  const page = doc.addPage([A4_LANDSCAPE.width, A4_LANDSCAPE.height]);
  const { width: w, height: h } = page.getSize();
  const serifBold = await doc.embedFont(StandardFonts.TimesRomanBold);
  const sans = await doc.embedFont(StandardFonts.Helvetica);
  const sansBold = await doc.embedFont(StandardFonts.HelveticaBold);

  page.drawRectangle({ x: 0, y: 0, width: w, height: h, color: PAPER });
  page.drawRectangle({ x: 0, y: 0, width: 8, height: h * 0.48, color: GREEN });
  page.drawRectangle({ x: 0, y: h * 0.48, width: 8, height: h * 0.1, color: WHITE });
  page.drawRectangle({ x: 0, y: h * 0.58, width: 8, height: h * 0.42, color: RED });
  drawWingArcs(page, w, h);
  drawCornerBrackets(page, w, h);

  const logoBytes = fs.readFileSync(path.join(ROOT, "public/images/falcon-logo-horizontal.png"));
  const logo = await doc.embedPng(logoBytes);
  const logoW = 250;
  const logoH = (logo.height / logo.width) * logoW;
  page.drawImage(logo, { x: 56, y: h - 56 - logoH, width: logoW, height: logoH });

  page.drawText("CERTIFICATE OF COMPLETION", {
    x: 56,
    y: h - 150,
    size: 28,
    font: serifBold,
    color: NAVY,
  });
  drawUaeRule(page, 56, h - 168, 90);

  page.drawText("THIS CERTIFIES THAT", {
    x: 56,
    y: h - 210,
    size: 9,
    font: sansBold,
    color: GREY,
  });
  page.drawText(SAMPLE.FullName, {
    x: 56,
    y: 290,
    size: 28,
    font: serifBold,
    color: NAVY,
  });
  page.drawLine({
    start: { x: 56, y: 275 },
    end: { x: 616, y: 275 },
    thickness: 0.6,
    color: LINE,
  });

  page.drawText("HAS SUCCESSFULLY COMPLETED", {
    x: 56,
    y: 240,
    size: 9,
    font: sansBold,
    color: GREY,
  });
  page.drawText(SAMPLE.Class, {
    x: 56,
    y: 210,
    size: 14,
    font: sansBold,
    color: INK,
  });
  page.drawLine({
    start: { x: 56, y: 198 },
    end: { x: 616, y: 198 },
    thickness: 0.6,
    color: LINE,
  });

  page.drawText(SAMPLE.Awarded, { x: 56, y: 150, size: 12, font: sans, color: INK });
  page.drawText("DATE", { x: 56, y: 132, size: 8, font: sansBold, color: GREY });
  page.drawRectangle({ x: 98, y: 134, width: 5, height: 5, color: GREEN });

  page.drawLine({
    start: { x: 56, y: 112 },
    end: { x: w - 56, y: 112 },
    thickness: 0.7,
    color: LINE,
  });

  page.drawRectangle({ x: 56, y: 78, width: 18, height: 18, borderColor: NAVY, borderWidth: 1 });
  page.drawText("ID", { x: 59.5, y: 83, size: 7, font: sansBold, color: NAVY });
  page.drawText(SAMPLE.Id, { x: 84, y: 86, size: 9, font: sans, color: INK });
  page.drawText("CERTIFICATE ID", { x: 84, y: 72, size: 7, font: sansBold, color: GREY });

  page.drawRectangle({ x: 360, y: 78, width: 18, height: 18, borderColor: NAVY, borderWidth: 1 });
  page.drawText("URL", { x: 362.5, y: 83, size: 6, font: sansBold, color: NAVY });
  page.drawText(SAMPLE.Link, { x: 388, y: 86, size: 9, font: sans, color: INK });
  page.drawText("VERIFICATION LINK", { x: 388, y: 72, size: 7, font: sansBold, color: GREY });

  page.drawText("Falcon Innovation Academy FZ-LLC  |  License No: 52001001", {
    x: 56,
    y: 36,
    size: 8,
    font: sans,
    color: GREY,
  });
  page.drawText("Knowledge. Intelligence. Impact.", {
    x: w - 220,
    y: 36,
    size: 8,
    font: await doc.embedFont(StandardFonts.TimesRoman),
    color: NAVY,
  });

  fs.writeFileSync(outPath, await doc.save());
}

async function main() {
  // 1) Blank fillable template
  const blank = await buildBase(false);
  const blankPath = path.join(ROOT, "falcon_certificate_template_modern(1).pdf");
  fs.writeFileSync(blankPath, await blank.doc.save());
  console.log("wrote", blankPath);

  // 2) Filled test (fields populated, still fillable)
  const filled = await buildBase(true);
  const filledPath = path.join(ROOT, "falcon_certificate_template_modern_us_test_filled(1).pdf");
  fs.writeFileSync(filledPath, await filled.doc.save());
  console.log("wrote", filledPath);

  // 3) Flattened US preview
  const previewPath = path.join(ROOT, "falcon_certificate_template_modern_us_preview(1).pdf");
  await writePreviewFlattened(previewPath);
  console.log("wrote", previewPath);

  // Also drop clean copies without "(1)" suffix for convenience
  fs.copyFileSync(blankPath, path.join(ROOT, "falcon_certificate_template_modern.pdf"));
  fs.copyFileSync(filledPath, path.join(ROOT, "falcon_certificate_template_modern_us_test_filled.pdf"));
  fs.copyFileSync(previewPath, path.join(ROOT, "falcon_certificate_template_modern_us_preview.pdf"));
  console.log("also wrote clean filenames without (1)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
