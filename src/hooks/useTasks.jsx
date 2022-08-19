import toast from "react-hot-toast";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const TasksContext = createContext({});

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Necessário para transformar "startDate & endDate" em Date
  // Para o funcionamento do rc-year-calendar as datas precisam estar em formato Date do JS
  function formatCreateSetTask(data) {
    data.map(task => {
      setTasks([
        ...tasks,
        {
          id: task.id,
          name: task.name,
          startTime: task.startTime,
          endTime: task.endTime,
          startDate: new Date(task.startDate),
          endDate: new Date(task.endDate),
          color: task.color,
          status: task.status,
          createdAt: task.createdAt,
        }
      ])
    });
  }

  function formatSetTask(data) {
    const array = [];

    data.map(task => {
      array.push({
        id: task.id,
        name: task.name,
        startTime: task.startTime,
        endTime: task.endTime,
        startDate: new Date(task.startDate),
        endDate: new Date(task.endDate),
        color: task.color,
        status: task.status,
        createdAt: task.createdAt,
      })
    });

    setTasks(array);
  }

  // Função para criar uma nova tarefa
  // (MirageJS -> Servidor no arquivo "main.tsx")
  async function createTask(name, date, startTime, endTime, color) {
    let verify = false;
    const taskExist = (await api.get('/tasks')).data;

    function verifyTaskExist() {
      taskExist.tasks.map(task => {
        if (task.name == name) {
          verify= true;
          toast.error('Esse nome já pertence a uma tarefa!');
        }
      });

      return new Promise(resolve => resolve(true));
    }

    verifyTaskExist().then(async () => {
      if (!verify) {
        await api.post('/tasks', {
          name,
          startDate: date[0],
          endDate: date[1],
          startTime,
          endTime,
          status: false,
          createdAt: new Date(),
          color: color,
        });
  
        api.get('/tasks').then(response => formatCreateSetTask(response.data.tasks));
  
        toast.success('Tarefa criada com sucesso!');
      }
    })
  }

  // Função para deletar uma tarefa 
  // (MirageJS -> Servidor no arquivo "main.tsx")
  async function deleteTask(id, name) {
    await api.delete(`/tasks/${id}`);

    api.get('/tasks').then(response => {
      formatSetTask(response.data.tasks)
    });

    toast.success(`Tarefa "${name}" foi excluida com sucesso.`);
  }

  // Função para atualizar o status
  // (MirageJS -> Servidor no arquivo "main.tsx")
  async function updateStatusTask(id, status) {
    await api.put(`/tasks/${id}`, {
      status
    });

    api.get('/tasks').then(response => {
      formatSetTask(response.data.tasks)
    });
  }

  useEffect(() => {
    api.get('/tasks').then(response => formatSetTask(response.data.tasks));
  }, []);

  return (
    <TasksContext.Provider value={{tasks, createTask, deleteTask, updateStatusTask}}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  return context;
}