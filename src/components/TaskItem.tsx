import { Button, Flex, Text } from "@adobe/react-spectrum";

type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
};

type TaskItemProps = {
    task: Task;
    onStatusChange: () => void;
};

export default function TaskItem({ task, onStatusChange }: TaskItemProps) {
    const toggleStatus = async () => {
        const newStatus = task.status === "Pending" ? "Completed" : "Pending";

        const mutation = `
      mutation {
        updateTaskStatus(id: "${task.id}", status: "${newStatus}") {
          id
          status
        }
      }
    `;

        await fetch("http://localhost:5000/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: mutation }),
        });

        onStatusChange();
    };

    return (
        <Flex direction="row" gap="size-200" alignItems="center" margin="size-200" UNSAFE_style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", width: "100%" }}>
            <Flex direction="column" flex>
                <Text UNSAFE_style={{ fontWeight: "bold" }}>{task.title}</Text>
                <Text>{task.description}</Text>
                <Text>Status: {task.status}</Text>
            </Flex>
            <Button variant="primary" onPress={toggleStatus}>
                Toggle Status
            </Button>
        </Flex>
    );
}
