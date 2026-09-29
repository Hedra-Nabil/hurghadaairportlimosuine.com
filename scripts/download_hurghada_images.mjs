import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesToDownload = [
  {
    name: 'hero-banner',
    url: 'https://images.unsplash.com/photo-1755545414327-36524febb5b6?q=85&w=1920&auto=format&fit=crop',
    width: 1920,
    height: 1080
  },
  {
    name: 'hurghada-marina',
    url: 'https://images.unsplash.com/photo-1754400591642-38f3257f962f?q=85&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 800
  },
  {
    name: 'el-gouna',
    url: 'https://images.unsplash.com/photo-1576318356824-667e0fae99af?q=85&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 800
  },
  {
    name: 'sahl-hasheesh',
    url: 'https://images.unsplash.com/photo-1722264222007-3e4f1808db3e?q=85&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 800
  },
  {
    name: 'makadi-bay',
    url: 'https://images.unsplash.com/photo-1627760444890-663d4c563a15?q=85&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 800
  },
  {
    name: 'soma-bay',
    url: 'https://images.unsplash.com/photo-1692986171966-eee29a388b66?q=85&w=1200&auto=format&fit=crop',
    width: 1200,
    height: 800
  }
];

const outDir = path.resolve('public/images');

async function processImages() {
  for (const item of imagesToDownload) {
    console.log(`Downloading ${item.name}...`);
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed to fetch ${item.name}: ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      
      const jpgPath = path.join(outDir, `${item.name}.jpg`);
      const webpPath = path.join(outDir, `${item.name}.webp`);

      await sharp(buffer)
        .resize(item.width, item.height, { fit: 'cover' })
        .jpeg({ quality: 85, progressive: true })
        .toFile(jpgPath);

      await sharp(buffer)
        .resize(item.width, item.height, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(webpPath);

      console.log(`✓ Processed ${item.name}.jpg and ${item.name}.webp`);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err);
    }
  }
}

processImages();
