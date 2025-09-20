import { useState } from "react";
import { View, TextField, Button, Content, Heading, Flex, Text } from "@adobe/react-spectrum";

// Types
interface Task {
    id: number;
    title: string;
    description: string;
    status: "Pending" | "Completed";
}

interface TaskFormProps {
    onTaskAdded: (task: Task) => void;
}

interface TaskCardProps {
    task: Task;
    onToggle: (id: number) => void;
}

// TaskForm Component
function TaskForm({ onTaskAdded }: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = () => {
        if (!title.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            title,
            description: desc,
            status: "Pending",
        };

        onTaskAdded(newTask);
        setTitle("");
        setDesc("");
    };

    return (
        <View padding="size-200">
            <TextField
                label="Title"
                value={title}
                onChange={setTitle}
            />
            <TextField
                label="Description"
                value={desc}
                onChange={setDesc}
            />
            <Button variant="cta" onPress={handleSubmit} marginTop="size-200">
                Add Task
            </Button>
        </View>
    );
}

// TaskCard Component
function TaskCard({ task, onToggle }: TaskCardProps) {
    return (
        <View borderWidth="thin" borderColor="gray-400" borderRadius="medium" padding="size-200" marginY="size-100">
            <Heading level={4}>{task.title}</Heading>
            <Content>
                <Text>{task.description}</Text>
            </Content>
            <Button
                variant="secondary"
                onPress={() => onToggle(task.id)}
                marginTop="size-100"
            >
                {task.status === "Pending" ? "Mark Completed" : "Mark Pending"}
            </Button>
        </View>
    );
}

// Parent App Component
export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleTaskAdded = (task: Task) => {
        setTasks((prev) => [...prev, task]);
    };

    const handleToggleStatus = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
                    : task
            )
        );
    };

    return (
        <View padding="size-400">
            <Heading level={2}>Task Manager</Heading>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <Flex direction="column" gap="size-200" marginTop="size-400">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} onToggle={handleToggleStatus} />
                ))}
            </Flex>
        </View>
    );
}
