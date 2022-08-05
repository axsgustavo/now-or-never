import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TasksProvider } from './hooks/useTasks';

import { Home } from './pages/Home';
import { Kanban } from './pages/Kaban';

import { NewTaskModal } from './components/NewTaskModal';
import { SideNavigation } from './components/SideNavigation';

import Modal from 'react-modal';

Modal.setAppElement('#root');

export function Router() {
  const [newTaskModalState, setNewTaskModalState] = useState(false);

  function handleChangeStateNewTaskModal() {
    setNewTaskModalState(!newTaskModalState);
  }

  return (
    <BrowserRouter>
      <TasksProvider>
          <SideNavigation /> 
          <NewTaskModal isOpen={newTaskModalState} onRequestClose={handleChangeStateNewTaskModal} />

          <Routes>
              <Route path="/" element={<Home openNewTaskModal={handleChangeStateNewTaskModal}  />} />
              <Route path="/aaa" element={<Kanban />} />
          </Routes>
      </TasksProvider>
    </BrowserRouter>
  );
}