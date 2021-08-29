import axios from "axios";
import { User } from "../models/User";

export async function getUsersAsync(): Promise<User[]> {
    const result: User[] = [];
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        response.data.forEach((e: any) => {
            result.push({id: e.id, name: e.name});
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

/**
 * This is the fake api, after 2 seconds, return {id: 1000, name: "David"}
 */
export async function getDavidInfoAsync(): Promise<User> {
    await new Promise(r => setTimeout(r, 2000));
    return {
        id: 1000,
        name: "David"
    };
}