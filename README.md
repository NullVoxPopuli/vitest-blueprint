# vitest-blueprint


ember-cli blueprint for boot-strapping vitest projects

## Usage

```bash
ember new tests -b vitest-blueprint
```

This generates a tsconfig.json + vitest.config.ts project setup for:
 - typescript (and js) -- supported extensions: `js,mjs,cjs,ts,mts,cts`
 - Node ESM

Matches `*test.ext` files.

```bash
cd tests
npm test # but this error because there are no tests by default
```

## If already in a monorepo

```bash
ember new tests -b vitest-blueprint --skip-npm --skip-git
```

## Using yarn or pnpm

```bash
ember new tests -b vitest-blueprint --skip-npm --skip-git
cd tests
pnpm install # or yarn install
```
