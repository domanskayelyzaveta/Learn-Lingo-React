import {
  BtnLogIn,
  BtnRegister,
  BtnWrapper,
  FlagIcon,
  HeaderWrapper,
  LinkLogo,
  LogoWrapper,
  NavItems,
  NavList,
  NavWrapper,
  Svg,
} from "./Header.styled";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setModalContent, setModalStatus } from "../../redux/slice";
import { selectOpenModal } from "../../redux/selectors";

const Header = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  const handleOpenUserModal = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Register"));
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <FlagIcon />
        <LinkLogo to="/">LearnLingo</LinkLogo>
      </LogoWrapper>
      <NavWrapper>
        <NavList>
          <li>
            <NavItems to="/">Home</NavItems>
          </li>
          <li>
            <NavItems to="/tutors">Teachers</NavItems>
          </li>
        </NavList>
      </NavWrapper>
      <BtnWrapper>
        <BtnLogIn>
          <Svg>
            <use href={`${sprite}#log-in`}></use>
          </Svg>
          Log in
        </BtnLogIn>
        <BtnRegister type="button" onClick={handleOpenUserModal}>
          Registration
        </BtnRegister>
      </BtnWrapper>
    </HeaderWrapper>
  );
};

export default Header;
