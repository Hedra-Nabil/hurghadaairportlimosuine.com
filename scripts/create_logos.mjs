import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const iconPath = 'public/images/logo/logo-icon.png';
const outDir = 'public/images/logo';

async function generateLimousineLogos() {
  const iconBase64 = fs.readFileSync(iconPath).toString('base64');
  const iconDataUri = `data:image/png;base64,${iconBase64}`;

  // 1. Horizontal Logo for Light Backgrounds (Navy + Amber text)
  const horizontalSvg = `
    <svg width="650" height="120" viewBox="0 0 650 120" xmlns="http://www.w3.org/2000/svg">
      <image href="${iconDataUri}" x="10" y="10" width="135" height="100" />
      <text x="160" y="55" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="900" font-size="32" fill="#141238" letter-spacing="1.2">HURGHADA AIRPORT</text>
      <text x="160" y="94" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="800" font-size="22" fill="#f59e0b" letter-spacing="4.5">LIMOUSINE &amp; TRANSFERS</text>
    </svg>
  `;

  // 2. Horizontal Logo for Dark Backgrounds (White + Amber text)
  const horizontalWhiteSvg = `
    <svg width="650" height="120" viewBox="0 0 650 120" xmlns="http://www.w3.org/2000/svg">
      <image href="${iconDataUri}" x="10" y="10" width="135" height="100" />
      <text x="160" y="55" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="900" font-size="32" fill="#ffffff" letter-spacing="1.2">HURGHADA AIRPORT</text>
      <text x="160" y="94" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="800" font-size="22" fill="#f59e0b" letter-spacing="4.5">LIMOUSINE &amp; TRANSFERS</text>
    </svg>
  `;

  // 3. Stacked Brand Logo (Full color)
  const stackedSvg = `
    <svg width="520" height="360" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <image href="${iconDataUri}" x="135" y="15" width="250" height="185" />
      <text x="260" y="265" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="900" font-size="34" fill="#141238" letter-spacing="1.5">HURGHADA AIRPORT</text>
      <text x="260" y="320" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="800" font-size="24" fill="#f59e0b" letter-spacing="5">LIMOUSINE &amp; TRANSFERS</text>
    </svg>
  `;

  // 4. Stacked Navy Logo
  const stackedNavySvg = `
    <svg width="520" height="360" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <image href="${iconDataUri}" x="135" y="15" width="250" height="185" />
      <text x="260" y="265" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="900" font-size="34" fill="#141238" letter-spacing="1.5">HURGHADA AIRPORT</text>
      <text x="260" y="320" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="800" font-size="24" fill="#141238" letter-spacing="5">LIMOUSINE &amp; TRANSFERS</text>
    </svg>
  `;

  // 5. Stacked White Logo
  const stackedWhiteSvg = `
    <svg width="520" height="360" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <image href="${iconDataUri}" x="135" y="15" width="250" height="185" />
      <text x="260" y="265" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="900" font-size="34" fill="#ffffff" letter-spacing="1.5">HURGHADA AIRPORT</text>
      <text x="260" y="320" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="800" font-size="24" fill="#ffffff" letter-spacing="5">LIMOUSINE &amp; TRANSFERS</text>
    </svg>
  `;

  // 6. Stacked White & Gold Logo
  const stackedWhiteGoldSvg = `
    <svg width="520" height="360" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
      <image href="${iconDataUri}" x="135" y="15" width="250" height="185" />
      <text x="260" y="265" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="900" font-size="34" fill="#ffffff" letter-spacing="1.5">HURGHADA AIRPORT</text>
      <text x="260" y="320" text-anchor="middle" font-family="Segoe UI, Montserrat, Arial, sans-serif" font-weight="800" font-size="24" fill="#f59e0b" letter-spacing="5">LIMOUSINE &amp; TRANSFERS</text>
    </svg>
  `;

  // Render PNGs
  await sharp(Buffer.from(horizontalSvg)).trim().png().toFile(path.join(outDir, 'logo-horizontal.png'));
  await sharp(Buffer.from(horizontalWhiteSvg)).trim().png().toFile(path.join(outDir, 'logo-horizontal-white.png'));
  await sharp(Buffer.from(stackedSvg)).trim().png().toFile(path.join(outDir, 'logo-brand.png'));
  await sharp(Buffer.from(stackedNavySvg)).trim().png().toFile(path.join(outDir, 'logo-navy.png'));
  await sharp(Buffer.from(stackedWhiteSvg)).trim().png().toFile(path.join(outDir, 'logo-white.png'));
  await sharp(Buffer.from(stackedWhiteGoldSvg)).trim().png().toFile(path.join(outDir, 'logo-white-gold.png'));
  
  console.log('ALL HURGHADA AIRPORT LIMOUSINE LOGOS GENERATED SUCCESSFULLY!');
}

generateLimousineLogos().catch(console.error);
