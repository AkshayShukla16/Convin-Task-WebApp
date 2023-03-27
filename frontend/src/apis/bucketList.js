import axios from "axios";
import { base_url } from "./config";

export const getBucketListApi = async () => {
    try {
        const response = await axios.get(`${base_url}/getBucketList`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const addNewBucketApi = async (bucketName) => {
    const response = await axios.post(`${base_url}/addNewBucket`, { bucketName });
    return response.data;
}

export const updateBucketNameApi = async (updateBucketNameFormValues) => {
    try {
        const response = await axios.post(`${base_url}/updateBucketName`, { updateBucketNameFormValues });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}