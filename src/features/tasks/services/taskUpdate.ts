import { AxiosError } from "axios";
import { showMessage } from "../../../adapters/showMessage";
import { api } from "../../../services/axios";

export async function taskUpdate(id: string, description: string) {
    try{
        const response = await api.patch(`tasks/${id}`, {completed: true, description: description});
        if(response.status == 201){
            showMessage.success('Task completed!');
            return;
        }

        showMessage.error('Error completing task!');
    }catch (error) {
        if (error instanceof AxiosError) {
            showMessage.error(`${error.response?.status && 'Error deleting task! try again later!'}`);
        }
    }
}