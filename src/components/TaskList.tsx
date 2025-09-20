import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
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

    const res = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    setTasks(json.data.getAllTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onStatusChange={fetchTasks} />
      ))}
    </>
  );
}
