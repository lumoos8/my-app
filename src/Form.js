import React, { useState } from "react";
import { Input } from "./Input";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => setUsername(event.target.value);
  const handlePass = (event) => setPassword(event.target.value);
  const login = () => {
    console.log(username);
    console.log(password);
  };
  return (
    <div>
      <Input label="Your name" handleChange={handleChange} />
      <Input type="password" label="Password" handleChange={handlePass} />
      <button onClick={login}>Check</button>
    </div>
  );
};
