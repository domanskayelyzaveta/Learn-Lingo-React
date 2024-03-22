import { useDispatch, useSelector } from "react-redux";
import Form from "../../Form/Form";
import { registerThunk, signInThunk } from "../../../redux/thunks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectOpenModal } from "../../../redux/selectors";
import { setModalStatus } from "../../../redux/slice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal)

  const handleRegistration = async ({ name, email, password }) => {
    try {
      await dispatch(registerThunk({ name, email, password })).unwrap();
      dispatch(setModalStatus(!modalStatus));
      await dispatch(signInThunk({ email, password }));
      toast.success("Registration completed successfully");
    } catch (error) {
      toast.error(error.message);
    }
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
