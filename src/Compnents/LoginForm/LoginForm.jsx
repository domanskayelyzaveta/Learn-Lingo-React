import Form from "../Form/Form";

const LoginForm = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  return (
    <>
      <Form
        onSubmit={handleLogin}
        titleText="Log In"
        text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
        showNameInput={false}
      />
    </>
  );
};

export default LoginForm;
