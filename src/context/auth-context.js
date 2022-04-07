import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/app/notes";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        navigate(from, { replace: true });
        toast.success("Signed Up Successfully");
      })
      .catch((e) => {
        console.log("Error in signUp", e);
        toast.error(e.message);
      });
  };

  const signIn = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        navigate(from, { replace: true });
        toast.success("Logged In Successfully");
      })
      .catch((e) => {
        console.log("Error in signIn", e);
        toast.error(e.message);
      });
  };

  const signOut = () => {
    return auth
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        console.log("Error in signOut", e);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
