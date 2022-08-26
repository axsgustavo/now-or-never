import Modal from "react-modal";
import toast from "react-hot-toast";

import { useEffect, useState } from "react";
import { useTasks } from "../../hooks/useTasks";

import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";

import { IoMdClose } from "react-icons/io";
import { Container } from "./styles";

export function NewTaskModal({ isOpen, onRequestClose, dateRange }) {
  const { createTask } = useTasks();

  const [stepControl, setStepControl] = useState(0);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState([new Date(), new Date()]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [color, setColor] = useState('');

  async function handleCreateNewTask(event) {
    event.preventDefault();

    if (!startTime || !endTime) {
      return toast.error("Coloque os horarios da sua tarefa!");
    }

    if (!color) {
      return toast.error("Defina uma cor para sua tarefa!");
    }

    if (title.replace(/ /g,'') == '') return;

    await createTask(title, date, startTime, endTime, color);

    setStepControl(0);
    setTitle('');
    setDate([new Date(), new Date()])
    setStartTime('');
    setEndTime('');
    setColor('')
    onRequestClose([]);
  }

  useEffect(() => {
    if (dateRange.length > 0) {
      setDate(dateRange);
    }
  }, [dateRange]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose([])}
      className="react-modal"
      overlayClassName="react-modal-overlayer"
    >
      <button className="react-modal-button-close" onClick={() => onRequestClose([])}>
        <IoMdClose />
      </button>

      <Container>
        {stepControl == 0 && (
          <StepOne 
            title={title}
            setTitle={event => setTitle(event.target.value)}
            date={date}
            setDate={setDate}
            stepControl={stepControl}
            setStepControl={setStepControl}
          />
        )}

        {stepControl == 1 && (
          <StepTwo
            title={title}
            startTime={startTime}
            setStartTime={event => setStartTime(event.target.value)}
            endTime={endTime}
            setEndTime={event => setEndTime(event.target.value)}
            color={color}
            setColor={setColor}
            stepControl={stepControl}
            setStepControl={setStepControl}
            onCreateNewTask={handleCreateNewTask}
          />
        )}
      </Container>
    </Modal>
  );
}