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

- babel-preset-react-app

- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)

Add packages to project:
```bash
yarn add --dev jest @testing-library/jest-dom @testing-library/react babel-preset-react-app
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
        "<rootDir>/src/**/__test__/**/*.{js,jsx,ts,tsx}",
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

## Include jest folder
Open `tsconfig.json` file and add 'jest' to 'include' attribute
```json
// tsconfig.json
{
"include": [
    "./src",
    "jest"
  ]
}

```

## Add script test to run test with command: `yarn test`
Open *package.json* and add new script:
```json
  "scripts": {
    "test": "jest"
  },
```

Run all tests: `yarn test`

Run specific test files: `yarn test SomeTestFileNameToRun`

## Simple test: 1 + 2 equal 3?
Add `sum.test.ts` file
```typescript
test('should equal 3', () => {
    expect(1 + 2).toBe(3);
})
```

## Test react component
```typescript
import { fireEvent, render } from '@testing-library/react';
import React, { useState } from 'react'

export default function CountButton() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => { setCount(count + 1) }}>
            {`Count: ${count}. Click me to count++`}
        </button>
    )
}

describe("Test user click button", () => {
    test('should count equal 1', () => {
        const { container } = render(<CountButton />);
        const button = container.children[0];
        fireEvent.click(button);
        expect(button.innerHTML).toEqual("Count: 1. Click me to count++");
    })
})
```

## Mockup axios fake response
```typescript
import axios from "axios";
import { getUsersAsync } from "../userService";

describe("Mockup axios with fake data", () => {
    const fakeResponse = [{ id: 1, name: "David" }, { id: 2, name: "Lucas" }];
    test('should has only 2 users', async () => {
        jest.mock("axios")
        axios.get = jest.fn().mockImplementation(() => Promise.resolve({
            data: fakeResponse,
        }));
        const users = await getUsersAsync();
        expect(users.length).toEqual(2);
    })
})
```
## References
[Getting Started With React using Vite.js](https://pranshushah.tech/getting-started-with-react-using-vitejs)

https://www.valentinog.com/blog/testing-react/

## To be continue...
