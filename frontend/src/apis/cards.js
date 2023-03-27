import axios from "axios";
import { base_url } from "./config";

export const getCardListApi = async (bucket_id) => {
    try {
        const response = await axios.post(`${base_url}/getCardList`, { bucket_id });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const addNewCardApi = async (cardFormValues) => {
    const response = await axios.post(`${base_url}/addNewCard`, { cardFormValues });
    return response.data;
}

export const deleteCardApi = async (card_id) => {
    try {
        const response = await axios.post(`${base_url}/deleteCard`, { card_id });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const updateCardApi = async (cardFormValues) => {
    try {
        const response = await axios.post(`${base_url}/updateCard`, { cardFormValues });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}