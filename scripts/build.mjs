import { mkdir, readFile, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(projectRoot, 'dist');
const rootFiles = ['index.html', 'styles.css', 'app.js'];

if (path.dirname(outputRoot) !== projectRoot || path.basename(outputRoot) !== 'dist') {
  throw new Error('Refusing to clear an unexpected build output directory.');
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const file of rootFiles) {
  await copyFile(path.join(projectRoot, file), path.join(outputRoot, file));
}

const page = await readFile(path.join(projectRoot, 'index.html'), 'utf8');
const stylesheet = await readFile(path.join(projectRoot, 'styles.css'), 'utf8');
const referencedAssets = new Set(
  [...`${page}\n${stylesheet}`.matchAll(/assets\/([\w.-]+)/g)].map((match) => match[1]),
);

for (const asset of referencedAssets) {
  const source = path.join(projectRoot, 'assets', asset);
  const destination = path.join(outputRoot, 'assets', asset);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

const builtPage = await readFile(path.join(outputRoot, 'index.html'), 'utf8');
const builtStylesheet = await readFile(path.join(outputRoot, 'styles.css'), 'utf8');
const builtAssets = new Set(
  [...`${builtPage}\n${builtStylesheet}`.matchAll(/assets\/([\w.-]+)/g)].map((match) => match[1]),
);

for (const asset of builtAssets) {
  await readFile(path.join(outputRoot, 'assets', asset));
}

console.log(`Built ${rootFiles.length} site files and ${referencedAssets.size} referenced assets into dist/.`);
