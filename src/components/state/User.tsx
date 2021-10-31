import { useState } from "react";

type AuthUser = {
    name:string;
    email:string;
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
      setUser({
          name:'saman keighobadi',
          email:"saman.keighobadi@gmail.com"
      })
  };
  const handleLogout = () => {};

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>
        Logout
        <div>User name is {user?.name} </div>
        <div>User email is{user?.email} </div>
      </button>
    </div>
  );
};
