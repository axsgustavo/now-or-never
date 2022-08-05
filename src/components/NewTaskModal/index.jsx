import Modal from "react-modal";
import TimeField from "react-simple-timefield";
import toast from "react-hot-toast";

import { useState } from "react";

import { useTasks } from "../../hooks/useTasks";

import { IoMdClose } from 'react-icons/io';

import { ButtonCreateNewTask, ButtonStepControl, Container } from "./styles";

export function NewTaskModal({ isOpen, onRequestClose }) {
  const { createTask } = useTasks();

  const [stepControl, setStepControl] = useState(0);
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  function handleNextStep(event) {
    event.preventDefault();

    if (stepControl < 2) {
      if (!(title.replace(/ /g, '').length > 0)) {
        return toast.error("O título deve ter pelo menos um caracter!")
      }
      setStepControl(stepControl + 1);
    }
  }

  function handlePreviousStep(event) {
    event.preventDefault();

    if (stepControl > 0) {
      setStepControl(stepControl - 1);
    }
  }

  async function handleCreateNewTask(event) {
    event.preventDefault();

    if(!startTime || !endTime) {
      return toast.error("Coloque os horarios das suas tarefas!");
    }

    if (title.replace(/ /g,'') == '') return;

    await createTask(title, startTime, endTime);

    setTitle('');
    setStartTime('');
    setEndTime('');
    setStepControl(0);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal"
      overlayClassName="react-modal-overlayer"
    >
      <button className="react-modal-button-close" onClick={onRequestClose}>
        <IoMdClose />
      </button>

      <Container>
        {stepControl == 0 && (
        <>
          <h2>Criar nova tarefa</h2>

          <label>
            <input 
              required 
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)} 
            />
            <span>Título da tarefa</span>
          </label>

          <ButtonStepControl 
            type="button" 
            onClick={handleNextStep}
          >
            Proximo  
          </ButtonStepControl>
        </>
        )}

        {stepControl == 1 && (
        <>
          <h2>{title}</h2>

          <div>
            <span>Horario inicial</span>
            <TimeField
              showSeconds={true}
              style={{width: '100%'}}
              value={startTime}
              onChange={event => setStartTime(event.target.value)}
            />
          </div>

          <div>
            <span>Horario Final</span>
            <TimeField
              showSeconds={true}
              style={{width: '100%'}}
              value={endTime}
              onChange={event => setEndTime(event.target.value)}
            />
          </div>

          <ButtonStepControl type="button" onClick={handlePreviousStep} backgrounColor="#333">
            voltar  
          </ButtonStepControl>

          <ButtonCreateNewTask type="button" onClick={handleCreateNewTask}>
            Criar nova tarefa
          </ButtonCreateNewTask>
        </>
        )}
      </Container>
    </Modal>
  );
}