import { Flex, Heading } from "@adobe/react-spectrum";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshTasks = () => setRefreshKey((prev) => prev + 1);

  return (
    <Flex
      direction="column"
      gap="size-300"
      margin="size-400"
      alignItems="center"
    >
      <Heading level={1} UNSAFE_style={{ color: "#4dabf7" }}>
        Task Tracker
      </Heading>
      <TaskForm onTaskAdded={refreshTasks} />
      <Flex direction="column" gap="size-200" width="100%">
        <TaskList key={refreshKey} />
      </Flex>
    </Flex>
  );
}
