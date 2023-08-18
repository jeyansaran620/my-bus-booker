import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";

const UseAuth = () => {
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return { signIn, signUp, signOutUser, isLoading, loggedInUser };
};

export default UseAuth;
