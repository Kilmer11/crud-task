import { AxiosError } from "axios";
import { showMessage } from "../../../adapters/showMessage";
import { api } from "../../../services/axios";

export async function taskDelete(id: string) {
    try{
        const response = await api.delete(`tasks/${id}`);
        if(response.status == 204){
            showMessage.success('Task Deleted successfuly');
            return;
        }

        showMessage.error('Error deleting task');
    }catch (error) {
        if (error instanceof AxiosError) {
            showMessage.error(`${error.response?.status && 'Error deleting task! try again later!'}`);
        }
    }
}