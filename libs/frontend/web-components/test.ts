/**
 * Basic build test for web components
 * This test verifies that the components build correctly and exports are available
 */

// Simple test to check if the build outputs exist
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

function test(name: string, fn: () => void) {
	try {
		console.log(`🧪 Running test: ${name}`);
		fn();
		console.log(`✅ ${name} passed`);
	} catch (error) {
		console.error(`❌ ${name} failed:`, error);
		process.exit(1);
	}
}

// Test that build outputs exist
test('Build outputs exist', () => {
	const distPath = join(process.cwd(), 'dist');
	const indexJs = join(distPath, 'index.js');
	const indexDts = join(distPath, 'index.d.ts');

	if (!existsSync(indexJs)) {
		throw new Error('index.js not found in dist/');
	}

	if (!existsSync(indexDts)) {
		throw new Error('index.d.ts not found in dist/');
	}
});

// Test that exports are correctly defined
test('Exports are correctly defined', () => {
	const indexJs = readFileSync(
		join(process.cwd(), 'dist', 'index.js'),
		'utf-8',
	);
	const indexDts = readFileSync(
		join(process.cwd(), 'dist', 'index.d.ts'),
		'utf-8',
	);

	// Check that components are exported
	if (!indexJs.includes('TmButton') || !indexJs.includes('TmCard')) {
		throw new Error('Components not exported in JavaScript');
	}

	if (!indexDts.includes('TmButton') || !indexDts.includes('TmCard')) {
		throw new Error('Components not exported in TypeScript definitions');
	}
});

// Test package.json is valid
test('Package.json is valid', () => {
	const pkg = JSON.parse(
		readFileSync(join(process.cwd(), 'package.json'), 'utf-8'),
	);

	if (!pkg.name || !pkg.version) {
		throw new Error('Package.json missing required fields');
	}

	if (!pkg.main || !pkg.types) {
		throw new Error('Package.json missing main or types fields');
	}
});

console.log('🏁 All build tests completed successfully');
