import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../../redux/thunks";
import Form from "../../Form/Form";
import { setModalStatus } from "../../../redux/slice";
import { selectOpenModal } from "../../../redux/selectors";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  const handleLogin = async ({ email, password }) => {
    try {
      await dispatch(signInThunk({ email, password })).unwrap();
      dispatch(setModalStatus(!modalStatus));
      // toast.success("You are logged in");
    } catch (error) {
      toast.error(error.message);
    }
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
