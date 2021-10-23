import { signOut } from "@firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

const Navbar = ({ user }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [navAnimation, setNavAnimation] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const displayName = user.displayName;
  const photoUrl = user.photoURL;

  useEffect(() => {
    const screenChange = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", screenChange);
  }, []);

  const handleToggle = () => {
    setToggleNav(!toggleNav);
    if (!toggleNav) {
      setNavAnimation("toggle");
    } else {
      setNavAnimation("");
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("You signed out!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="navbar">
        {(toggleNav || screenWidth > 518) && (
          <>
            <h2>Image Gallery</h2>
            <div className="navWrapper">
              <div>
                <button className="authBtns" onClick={handleSignOut}>
                  Sign Out
                </button>
              </div>
              <div className="namePhotoContainer">
                <img src={photoUrl} />
                <h3>{displayName}</h3>
              </div>
            </div>
          </>
        )}
        <div onClick={handleToggle} className={`hamburger ${navAnimation}`}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
