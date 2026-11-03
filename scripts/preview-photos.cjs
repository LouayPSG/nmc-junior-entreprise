// One-off helper: generate small preview copies of the board photos for visual verification.
// CommonJS on purpose: Node 20.9 on this machine can't import sharp's ESM build.
const sharp = require("sharp");
const { mkdir } = require("node:fs/promises");

const SRC = process.argv[2]; // folder containing original photos
const OUT = process.argv[3]; // folder to write previews

(async () => {
  await mkdir(OUT, { recursive: true });

  const files = [
    ["Yassine chouk.jpeg", "yassine-chouk"],
    ["Chahd islem abidi.jpeg", "chahd-abidi"],
    ["Souleimen madhbouh.jpeg", "souleimen-madhbouh"],
    ["Youssef Jbeli.jpeg", "youssef-jbeli"],
    ["Ranim Ajlani.jpeg", "ranim-ajlani"],
    ["Sirine riahi.jpeg", "sirine-riahi"],
  ];

  for (const [file, slug] of files) {
    const out = `${OUT}/${slug}.jpg`;
    await sharp(`${SRC}/${file}`)
      .rotate() // honor EXIF orientation
      .resize({ width: 640, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(out);
    const meta = await sharp(out).metadata();
    console.log(`${slug}: ${file} -> ${out} ${meta.width}x${meta.height}`);
  }
})();
