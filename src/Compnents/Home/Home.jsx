import girl1x from "../../images/home/girl.png";
import girl2x from "../../images/home/girl@2x.png";
import { offersData } from "./HomeData";
import {
  BtnGetStarted,
  LeftPartWrapper,
  ListWrapper,
  MainInfoWrapper,
  Paragraph,
  StyledCount,
  StyledList,
  StyledListItem,
  StyledSpan,
  SubText,
  Title,
} from "./Home.styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <MainInfoWrapper>
        <LeftPartWrapper>
          <Title>
            Unlock your potential with the best{" "}
            <StyledSpan>language</StyledSpan> tutors
          </Title>
          <Paragraph>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Paragraph>
          <Link to="/tutors">
            <BtnGetStarted>Get started</BtnGetStarted>
          </Link>
        </LeftPartWrapper>
        <div>
          <img
            srcSet={`${girl2x} 2x,${girl1x} 1x`}
            alt="Girl with laptop"
            loading="lazy"
          />
        </div>
      </MainInfoWrapper>
      <ListWrapper>
        <StyledList>
          {offersData.map(({ count, text }, index) => (
            <StyledListItem key={index}>
              <StyledCount>{count}</StyledCount>
              <SubText>{text}</SubText>
            </StyledListItem>
          ))}
        </StyledList>
      </ListWrapper>
    </div>
  );
};

export default Home;
