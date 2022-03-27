import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        navigate("/");
      })
      .catch((e) => {
        console.log("Error in signUp", e);
      });
  };

  const signIn = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        navigate("/");
      })
      .catch((e) => {
        console.log("Error in signIn", e);
      });
  };

  const signOut = () => {
    return auth.signOut().catch((e) => {
      console.log("Error in signOut", e);
    });
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
