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
- jest

- @testing-library/jest-dom

- react-test-renderer @types/react-test-renderer (for typescript)

- babel-preset-react-app

Add packages to project:
```bash
yarn add --dev jest @testing-library/jest-dom react-test-renderer @types/react-test-renderer babel-preset-react-app
```

## Add babel config file `babel.config.json`
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

## Add jest config file `jest.config.json`
```json
{
    "roots": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "jsdom",
    "resetMocks": true
}
```
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

[Using @testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## To be continue...