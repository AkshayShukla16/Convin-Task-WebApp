
import axios from "axios";
import { base_url } from "./config";

export const getHistoryListApi = async () => {
    try {
        const response = await axios.get(`${base_url}/getHistoryList`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const saveHistoryApi = async (playedHistory) => {
    try {
        const response = await axios.post(`${base_url}/saveHistory`, { playedHistory });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


