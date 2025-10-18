import { useEffect } from "react";
import { useState } from "react";
import { taskList } from "../services/taskList";
import { taskDelete } from "../services/taskDelete";


export function useTasks(){
    const [tasks, setTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const fetchTasks = async () => {
            const result = await taskList();
            setTasks(result);
            setLoading(false);
    }

    const handleDelete = async (id: string) => {
        await taskDelete(id);
        fetchTasks();
    }

    useEffect(() => {
        fetchTasks();
    },[])

    return {tasks, loading, handleDelete}
}