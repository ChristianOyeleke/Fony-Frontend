import { useState, createContext } from "react";
import api from "../api/axios.js";

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [onGoingTasks, setOnGoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [error, setError] = useState(null);

  const filterTasks = (allTasks) => {
    const ongoing = allTasks.filter((task) => task.progress < 100);
    const completed = allTasks.filter((task) => task.progress >= 100);
    setOnGoingTasks(ongoing);
    setCompletedTasks(completed);
  };

  const getAllTasks = async () => {
    try {
      setError(null);
      const { data } = await api.get("/api/tasks");
      const allTasks = data.tasks || [];
      setTasks(allTasks);
      filterTasks(allTasks);
      return allTasks;
    } catch (err) {
      setError("Failed to fetch tasks");
      return [];
    }
  };

  const createTask = async (taskData) => {
    try {
      setError(null);
      const { data } = await api.post("/api/tasks", taskData);
      const newTask = data.task;
      const updatedTasks = [newTask, ...tasks];
      setTasks(updatedTasks);
      filterTasks(updatedTasks);
      return newTask;
    } catch (err) {
      setError("Failed to create task. Please try again.");
      throw err;
    }
  };

  const GetOngoingTasks = async () => {
    try {
      setError(null);
      if (tasks.length === 0) {
        await getAllTasks();
      } else {
        filterTasks(tasks);
      }
    } catch (err) {
      setError("Failed to fetch ongoing tasks");
    }
  };

  const getCompletedTasks = async () => {
    try {
      setError(null);
      if (tasks.length === 0) {
        await getAllTasks();
      } else {
        filterTasks(tasks);
      }
    } catch (err) {
      setError("Failed to fetch completed tasks");
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      setError(null);
      const { data } = await api.put(`/api/tasks/${id}`, updatedData);
      const updatedTask = data.task;
      const updatedTasks = tasks.map((task) =>
        task._id === id ? updatedTask : task,
      );
      setTasks(updatedTasks);
      filterTasks(updatedTasks);
      return updatedTask;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update task");
      throw err;
    }
  };

  const deleteTask = async (id) => {
    try {
      setError(null);
      await api.delete(`/api/tasks/${id}`);
      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
      filterTasks(updatedTasks);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete task");
      throw err;
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        completedTasks,
        error,
        onGoingTasks,
        getAllTasks,
        createTask,
        getCompletedTasks,
        GetOngoingTasks,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
