import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TasksProvider } from './hooks/useTasks';

import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';

import { NewTaskModal } from './components/NewTaskModal';
import SideNavigation from './components/SideNavigation';

import Modal from 'react-modal';

Modal.setAppElement('#root');

export function Router() {
  const [newTaskModalState, setNewTaskModalState] = useState(false);
  const [date, setDate] = useState([]);


  function handleChangeStateNewTaskModal([start, end]) {
    setNewTaskModalState(!newTaskModalState);

    if (start && end) {
      setDate([start, end]);
    }
  }

  return (
    <BrowserRouter>
      <TasksProvider>
          <SideNavigation /> 
          <NewTaskModal isOpen={newTaskModalState} onRequestClose={handleChangeStateNewTaskModal} dateRange={date} />

          <Routes>
              <Route path="/" element={<Home openNewTaskModal={handleChangeStateNewTaskModal}  />} />
              <Route path="/calendar" element={<Calendar openNewTaskModal={handleChangeStateNewTaskModal} />} />
          </Routes>
      </TasksProvider>
    </BrowserRouter>
  );
}