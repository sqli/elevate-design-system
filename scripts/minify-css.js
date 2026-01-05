#!/usr/bin/env node
/* global process */
/**
 * CSS Minification Script
 *
 * Minifies the compiled CSS using cssnano without re-processing through Tailwind.
 * This ensures the minified file is smaller than the unminified version.
 */
import { readFile, writeFile } from 'fs/promises';
import postcss from 'postcss';
import cssnano from 'cssnano';

const INPUT = './dist/sqli-design-system.css';
const OUTPUT = './dist/sqli-design-system.min.css';

async function minify() {
  try {
    console.log(`Reading ${INPUT}...`);
    const css = await readFile(INPUT, 'utf8');

    console.log('Minifying with cssnano...');
    const result = await postcss([cssnano({ preset: 'default' })]).process(css, {
      from: INPUT,
      to: OUTPUT,
    });

    await writeFile(OUTPUT, result.css);

    const originalSize = (css.length / 1024).toFixed(1);
    const minifiedSize = (result.css.length / 1024).toFixed(1);
    const reduction = (((css.length - result.css.length) / css.length) * 100).toFixed(1);

    console.log(`\n✅ Minification complete:`);
    console.log(`   Original:  ${originalSize} KB`);
    console.log(`   Minified:  ${minifiedSize} KB`);
    console.log(`   Reduction: ${reduction}%`);
  } catch (error) {
    console.error('❌ Minification failed:', error.message);
    process.exit(1);
  }
}

minify();
