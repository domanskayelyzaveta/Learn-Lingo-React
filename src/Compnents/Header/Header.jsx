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
import { selectIsSignedIn, selectOpenModal } from "../../redux/selectors";
import { logOutThunk } from "../../redux/thunks";
import { clearToken } from "../../service/api";

const Header = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);
  const isSignedIn = useSelector(selectIsSignedIn);

  const handleOpenRegisterModal = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Register"));
  };
  const handleOpenLoginModal = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("LogIn"));
  };
  const handleLogOut = () => {
    dispatch(logOutThunk());
    clearToken();
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
          {isSignedIn && (
            <li>
              <NavItems to="/favorites">Favorites</NavItems>
            </li>
          )}
        </NavList>
      </NavWrapper>
      <BtnWrapper>
        {isSignedIn ? (
          <BtnLogIn type="button" onClick={handleLogOut}>
            <Svg>
              <use href={`${sprite}#log-in`}></use>
            </Svg>
            Log out
          </BtnLogIn>
        ) : (
          <BtnLogIn type="button" onClick={handleOpenLoginModal}>
            <Svg>
              <use href={`${sprite}#log-in`}></use>
            </Svg>
            Log in
          </BtnLogIn>
        )}
        {!isSignedIn && (
          <BtnRegister type="button" onClick={handleOpenRegisterModal}>
            Registration
          </BtnRegister>
        )}
      </BtnWrapper>
    </HeaderWrapper>
  );
};

export default Header;
