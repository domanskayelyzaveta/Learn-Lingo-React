import { SelectTeachers } from "../../redux/selectors";
import sprite from "../../images/sprite.svg";
import {
  BtnReadMore,
  CardWrapper,
  Image,
  ImgDiv,
  InfoWrapper,
  LessonAndInfoWrapper,
  StyleLevelList,
  StyleList,
  StyledGreySpan,
  StyledLevelListItem,
  StyledOnline,
  SvgHeart,
} from "./TeacherCard.styled";
import { useDispatch, useSelector } from "react-redux";

const TeacherCard = () => {
  const teachersData = useSelector(SelectTeachers);
  console.log("teachersData::", teachersData);

  return (
    <>
      {teachersData?.map((teacher, index) => (
        <CardWrapper key={index}>
          <ImgDiv>
            <Image
              src={teacher?.avatar_url}
              alt={`${teacher?.name} ${teacher?.surname}`}
            />
            <StyledOnline></StyledOnline>
          </ImgDiv>

          <div>
            <LessonAndInfoWrapper>
              <div>
                <StyledGreySpan>Languages:</StyledGreySpan>
              </div>
              <LessonAndInfoWrapper>
                <p>Lessons online</p>
                <p>Lessons done: {teacher.lessons_done}</p>
                <p>Rating: {teacher.rating}</p>
                <p>Price / 1 hour: {teacher.price_per_hour}</p>
              </LessonAndInfoWrapper>
              <div>
                <SvgHeart>
                  <use href={`${sprite}#heart`}></use>
                </SvgHeart>
              </div>
            </LessonAndInfoWrapper>

            <h2>
              {teacher.name}&#8197;{teacher.surname}
            </h2>
            <InfoWrapper>
              <StyleList>
                <StyledGreySpan>Speaks:</StyledGreySpan>
                {teacher.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </StyleList>
              <p>
                <StyledGreySpan>Lesson info:</StyledGreySpan>&#8197;
                {teacher.lesson_info}
              </p>
              <StyleList>
                <StyledGreySpan>Conditions:</StyledGreySpan>
                {teacher.conditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </StyleList>
            </InfoWrapper>
            <BtnReadMore>Read more</BtnReadMore>
            <StyleLevelList>
              {teacher.levels.map((level, index) => (
                <StyledLevelListItem key={index}>{level}</StyledLevelListItem>
              ))}
            </StyleLevelList>
          </div>
        </CardWrapper>
      ))}
    </>
  );
};

export default TeacherCard;
