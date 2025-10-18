import { useEffect } from "react";
import { useState } from "react";

export function useFecth(featList: () => Promise<any>){
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect( () => {

        async function fetchData(){
            const result = await featList();
            setData(result);
            setLoading(false);
        }

        fetchData();
    },[featList])

    return {data, loading}
}