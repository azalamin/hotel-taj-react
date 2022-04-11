import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const GoogleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully...");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return {
    signInWithGoogle,
    user,
    logOut,
  };
};

export default useFirebase;
