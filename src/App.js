import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <Navbar />
      <div className="imageSection">
        <Header />
        <UploadForm />
        <Grid setSelected={setSelected} />
        {selected && <Modal selected={selected} setSelected={setSelected} />}
      </div>
    </>
  );
}

export default App;
