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

const Header = () => {
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
            <NavItems to="/teachers">Teachers</NavItems>
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
        <BtnRegister>Registration</BtnRegister>
      </BtnWrapper>
    </HeaderWrapper>
  );
};

export default Header;
