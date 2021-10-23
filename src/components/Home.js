import { useState } from "react";
import { auth } from "../firebase/config";
import Grid from "./Grid";
import Header from "./Header";
import Modal from "./Modal";
import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

const Home = () => {
  const [selected, setSelected] = useState(null);
  const user = auth.currentUser;
  return (
    <>
      <Navbar user={user} />
      <div className="imageSection">
        <Header />
        <UploadForm />
        <Grid setSelected={setSelected} />
        {selected && <Modal selected={selected} setSelected={setSelected} />}
      </div>
    </>
  );
};

export default Home;
