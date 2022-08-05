import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

import toast from 'react-hot-toast';

const TasksContext = createContext({});

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Função para criar uma nova pasta
  // (MirageJS -> Servidor no arquivo "main.tsx")
  async function createTask(name, startTime, endTime) {
    let verify = false;

    const taskExist = (await api.get('/tasks')).data;

    function verifyTaskExist() {
      taskExist.tasks.map(task => {
        if(task.name == name) {
          verify = true;
          toast.error('Esse nome já pertence a uma tarefa!')
        }
      });

      return new Promise(resolve => resolve(true));
    }

    verifyTaskExist().then(async () => {
      if(!verify) {
        const response = await api.post('/tasks', {
          name,
          startTime,
          endTime,
          createdAt: new Date(),
        });
  
        const task = response.data;
  
        setTasks([
          ...tasks,
          task
        ]);

        toast.success('Tarefa criada com sucesso!');
      }
  
      api.get('/tasks').then(response => setTasks(response.data.tasks));
    })
  }


  // Função para deletar uma pasta utilizando id 
  // (MirageJS -> Servidor no arquivo "main.tsx")
  async function deleteTask(id, name) {
    await api.delete(`/tasks/${id}`);

    api.get('/tasks').then(response => {
      setTasks(response.data.tasks)
    });

    toast.success(`Tareefa "${name}" foi excluida com sucesso.`);
  }


  useEffect(() => {
    api.get('/tasks').then(response => setTasks(response.data.tasks));
  }, []);

  return (
    <TasksContext.Provider value={{tasks, createTask, deleteTask}}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}