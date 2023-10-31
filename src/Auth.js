import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const [isLogged, setLogged] = useState(false);
  const navigate = useNavigate();
  const checkLogin = () => {
    const item = JSON.parse(sessionStorage.getItem("user"));
    if (!item) {
      setLogged(false);
      navigate("/login");
    } else setLogged(true);
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return isLogged ? children : "";
};

export default Auth;
