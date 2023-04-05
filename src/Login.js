import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

function LoginButton() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginInfo } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginInfo({  email, password })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log in</button>
    </form>

  );

}