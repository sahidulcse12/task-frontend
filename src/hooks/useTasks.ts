import { useEffect, useState } from "react";
import { fetchGraphQL } from "../api";

export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
};

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const loadTasks = async () => {
        setLoading(true);
        const query = `
      query {
        getAllTasks {
          id
          title
          description
          status
        }
      }
    `;
        const data = await fetchGraphQL(query);
        setTasks(data.getAllTasks);
        setLoading(false);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return { tasks, loading, reload: loadTasks };
}
