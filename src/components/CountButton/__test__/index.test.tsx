import React from 'react'
import { fireEvent, render } from "@testing-library/react"
import CountButton from '..';

describe("Test user click button", () => {
    test('should count equal 1', () => {
        const { container } = render(<CountButton />);
        const button = container.children[0];
        fireEvent.click(button);
        expect(button.innerHTML).toEqual("Count: 1. Click me to count++");
    })

})