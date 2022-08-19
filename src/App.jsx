import { Toaster } from 'react-hot-toast';
import { Router } from "./routes";
import { GlobalStyles } from "./styles/stylesGlobal";

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
      <Toaster position="top-right" />
    </>
  );
}

export default App
