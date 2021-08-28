## Description
Demo unit test with react + vitejs + jest.

## Init project using vitejs
```bash
# npm 6.x
npm init vite@latest my-react-app --template react-ts

# npm 7+, extra double-dash is needed:
npm init vite@latest my-react-app -- --template react-ts

# yarn
yarn create vite my-react-app --template react-ts
```

## Dev dependencies
- [jest](https://jestjs.io/)

- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)

- [react-test-renderer](https://reactjs.org/docs/test-renderer.html) @types/react-test-renderer (for typescript)

- babel-preset-react-app

- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)

Add packages to project:
```bash
yarn add --dev jest @testing-library/jest-dom react-test-renderer @types/react-test-renderer babel-preset-react-app
```

## Add babel config file `babel.config.json` in root folder
```json
{
    "env": {
        "test": {
            "presets": [
                "react-app"
            ]
        }
    }
}
```

## Add jest config file `jest.config.json` in root folder
```json
{
    "roots": [
        "<rootDir>/src"
    ],
    "setupFilesAfterEnv": [
        "<rootDir>/jest/jest.setup.ts"
    ],
    "testMatch": [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "jsdom",
    "resetMocks": true
}
```

## Add jest setup file
Create `jest.setup.ts` file on `jest` folder from root
```typescript
import '@testing-library/jest-dom';
```

This will append content of this file to test file before run test.

Now, you don't need import `@testing-library/jest-dom` for each test file.

## Add script test to run test with command: `yarn test`
Open *package.json* and add new script:
```json
  "scripts": {
    "test": "jest"
  },
```

## Simple test: 1 + 2 equal 3?
Add `sum.test.ts` file
```typescript
import "@testing-library/jest-dom"

test('should equal 3', () => {
    expect(1 + 2).toBe(3);
})
```
Run test: `yarn test`

## References
[Getting Started With React using Vite.js](https://pranshushah.tech/getting-started-with-react-using-vitejs)

## To be continue...
