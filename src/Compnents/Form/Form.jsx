import { useState } from "react";

const Form = ({ isRegistering, titleText, text, onSubmit, showNameInput }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <>
      <h2>{titleText}</h2>
      <p>{text}</p>
      <form onSubmit={handleSubmit}>
        {showNameInput && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegistering ? "Sign Up" : "Log In"}</button>
      </form>
    </>
  );
};

export default Form;
