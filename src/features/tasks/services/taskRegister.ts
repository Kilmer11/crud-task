import { AxiosError } from "axios";
import { showMessage } from "../../../adapters/showMessage";
import { api } from "../../../services/axios";

export async function taskRegister(description: string){
    showMessage.dismiss() 

    try{
        await api.post("/tasks", {description: description});
        showMessage.success('Task sucessfully inserted!');
        return true
    }catch (error) {
        if (error instanceof AxiosError) {
            showMessage.error(`${error.response?.status && 'Error inserting task! try again later!'}`);
        }
    }
}