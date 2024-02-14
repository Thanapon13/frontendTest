import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        autoClose="1000"
        theme="light"
        position="bottom-center"
        transition={Slide}
      />
    </>
  );
}

export default App;
