import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase/config";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  const [signedIn, setSignedIn] = useState(false);

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        return setSignedIn(true);
      }
      setSignedIn(false);
    });
  }, []);

  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {signedIn ? (
        <Home />
      ) : (
        <div className="signInHeader">
          <h1>Welcome to an online Gallery</h1>
          <p>Please sign in to enter</p>
          <button className="authBtns" onClick={handleGoogleAuth}>
            Google sign in
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
