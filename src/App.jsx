import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Toaster } from 'react-hot-toast';
import { Router } from "./routes";
import { GlobalStyles } from "./styles/stylesGlobal";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router />
      <GlobalStyles />
      <Toaster position="top-right" />
    </DndProvider>
  );
}

export default App
