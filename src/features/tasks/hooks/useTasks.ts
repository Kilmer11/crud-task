import { useEffect } from "react";
import { useState } from "react";
import { taskList } from "../services/taskList";
import { taskDelete } from "../services/taskDelete";
import { taskUpdate } from "../services/taskUpdate";
import type { Task } from "../types/taskModel";

export function useTasks(){
    const [tasks, setTasks] = useState<Task[]>([]);
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

    const handleUpdate = async (id: string, description: string) => {
        await taskUpdate(id, description);
        fetchTasks();
    }
    
    useEffect(() => {
        fetchTasks();
    },[])

    return {tasks, loading, handleDelete, handleUpdate}
}