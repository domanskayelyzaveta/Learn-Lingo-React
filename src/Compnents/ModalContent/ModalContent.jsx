import { useSelector } from "react-redux";
import { selectModalContent } from "../../redux/selectors";
import LoginForm from "../Modals/LoginForm/LoginForm";
import RegisterForm from "../Modals/RegisterForm/RegisterForm";


const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent) {
    case "LogIn":
      return <LoginForm />;
    case "Register":
      return <RegisterForm />;
    default:
      return null;
  }
};

export default ModalContent;
