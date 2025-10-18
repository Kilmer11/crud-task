import { AxiosError } from "axios";
import { showMessage } from "../../../adapters/showMessage";
import { api } from "../../../services/axios";

export async function taskList() : Promise<any>{
    try{
        const response = await api.get("/tasks");
        return response.data.data
    }catch (error) {
        if (error instanceof AxiosError) {
            showMessage.error(`${error.response?.status && 'Error inserting task! try again later!'}`);
        }
    }finally{
        console.log('listando tasks');
    }
}