import Form from "../Form/Form";

const RegisterForm = () => {
  const handleRegistration = (formData) => {
    console.log("Registration data:", formData);
  };

  return (
    <>
      <Form
        isRegistering
        onSubmit={handleRegistration}
        titleText="Registration"
        text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
        showNameInput={true} 
      />
    </>
  );
};

export default RegisterForm;
