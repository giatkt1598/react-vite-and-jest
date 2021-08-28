import React from "react"
import { render } from "@testing-library/react";
import renderer from "react-test-renderer"
import AppButton from ".."


test('should color green', () => {
    const { container, getByText } = render(
        <AppButton>Click me</AppButton>
    );
    expect(getByText("Click me")).toHaveStyle({
        color: 'green',
        background: 'yellow',
    });
    expect(container.children[0].tagName).toEqual("BUTTON")
})

