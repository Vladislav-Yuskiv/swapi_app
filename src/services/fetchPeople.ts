import {IDataPeople} from "../types/interfaces.ts";

export default async function fetchPeople(url: string): Promise<IDataPeople | undefined> {
    try {
        const response = await fetch(url);
        return response.json();
    }catch (e) {
        console.log("Error in fetchPeople",e)
    }
}