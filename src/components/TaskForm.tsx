import { useState } from "react";
import { Button, TextField, Flex } from "@adobe/react-spectrum";

type TaskFormProps = {
  onTaskAdded: () => void;
};

export default function TaskForm({ onTaskAdded }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!title || !description) return;

    const mutation = `
      mutation {
        createTask(title: "${title}", description: "${description}") {
          id
          title
          description
          status
        }
      }
    `;

    await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: mutation }),
    });

    setTitle("");
    setDescription("");
    onTaskAdded();
  };

  return (
    <Flex direction="column" gap="size-200" margin="size-200" width="100%">
      <TextField
        label="Title"
        value={title}
        onChange={setTitle}
        width="100%"
      />
      <TextField
        label="Description"
        value={description}
        onChange={setDescription}
        width="100%"
      />
      <Button
        variant="cta"
        onPress={handleSubmit}
        alignSelf="start"
      >
        Add Task
      </Button>
    </Flex>
  );
}
