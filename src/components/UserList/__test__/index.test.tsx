import { render, screen, waitFor } from "@testing-library/react"
import axios from "axios";
import React from "react";
import UserList from "..";

describe("Await componentDidMount", () => {
    test("it shows a list of users", async () => {
        render(<UserList />);
        let listItems;
        await waitFor(() => {
            listItems = screen.getAllByRole("listitem");
        }, { timeout: 5000 });

        const list = screen.getByRole("list");
        expect(list.childElementCount).toEqual(10);
    });
});

describe("Mockup axios demo", () => {
    const fakeResponse = [{ id: 1, name: "David" }, { id: 2, name: "Lucas" }];
    test('should has 2 users', async () => {
        jest.mock("axios")
        axios.get = jest.fn().mockImplementation(() => Promise.resolve(({
            data: fakeResponse,
        })))
        render(<UserList />);
        let listItems;
        await waitFor(() => {
            listItems = screen.getAllByRole("listitem");
        }, { timeout: 5000 });

        const list = screen.getByRole("list");
        expect(list.childElementCount).toEqual(2);
    })
})