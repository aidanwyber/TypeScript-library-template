# TypeScript library template

A template for a simple publishable TypeScript library.

# How to create it from scratch

## Create the project:

```sh
mkdir aux
cd aux
npm init -y
npm install --save-dev typescript tsup
npx tsc --init
```

## Configure `package.json`:

```json
{
	"name": "aux",
	"version": "1.0.0",
	"description": "A small utils library with string and math helpers",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"types": "dist/index.d.ts",
	"scripts": {
		"build": "tsup src/index.ts --format cjs,esm --dts"
	},
	"files": ["dist"],
	"keywords": ["utils", "typescript", "math", "string"],
	"author": "Your Name",
	"license": "MIT",
	"devDependencies": {
		// or whatever versions are already in this file
		"tsup": "^8.5.0",
		"typescript": "^5.9.3"
	}
}
```

## Configure `tsconfig.json`:

```json
{
	"compilerOptions": {
		"module": "ESNext",
		"target": "ES2020",
		"types": [],

		"sourceMap": true,
		"declaration": true,
		"declarationMap": true,

		"noUncheckedIndexedAccess": true,
		"exactOptionalPropertyTypes": true,

		"strict": true,
		"verbatimModuleSyntax": true,
		"isolatedModules": true,
		"noUncheckedSideEffectImports": true,
		"moduleDetection": "force",
		"skipLibCheck": true
	}
}
```

## Create files:

```pgsql
aux/
├── src/
│   ├── poetry.ts
│   ├── euclid.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## `index.ts`:

```ts
export * as Poetry from './poetry';
export * as Euclid from './euclid';
```

## Build the library:

```sh
npm run build
```

## The library is now in `/dist`:

```pgsql
dist/
├── index.js
├── index.mjs
├── index.d.ts
└── index.d.mts
```

## Using the library in a TypeScript project:

```ts
import { Poetry, Euclid } from 'aux';

console.log(Poetry.capitalise('hello'));
console.log(Poetry.splitWords('a quick fox'));
console.log(Euclid.triangleArea(10, 5));
```

## Publish the library to `npm`:

```sh
npm login
npm publish --access public
```

---
