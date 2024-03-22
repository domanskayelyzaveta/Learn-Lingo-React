import { useState } from "react";
import { FormWrapper, Input, Paragraph, StyledForm, SubmitBtn, Title } from "./Form.styled";

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
      <FormWrapper>
        <Title>{titleText}</Title>
        <Paragraph>{text}</Paragraph>
        <StyledForm onSubmit={handleSubmit}>
          {showNameInput && (
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitBtn type="submit">{isRegistering ? "Sign Up" : "Log In"}</SubmitBtn>
        </StyledForm>
      </FormWrapper>
    </>
  );
};

export default Form;
