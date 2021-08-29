import axios from "axios";
import { getUsersAsync } from "../userService";

describe("Async await example test", () => {
    test('should get 10 users', async () => {
        const users = await getUsersAsync();
        expect(users.length).toEqual(10);
    })
    
})

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