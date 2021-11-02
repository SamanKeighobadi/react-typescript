import { useState } from "react";

const Loggin = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged((prevState) => !prevState);
  };
  const handleLogout = () => {
    setIsLogged((prevState) => !prevState);
  };

  return (
    <div>
      <div>user is {isLogged ? "login" : "logout"}</div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Loggin;
