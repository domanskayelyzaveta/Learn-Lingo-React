import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;

  border-radius: 24px;
  background-color: var(--white);
`;

export const ImgDiv = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--yellow);
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const StyledOnline = styled.div`
  position: absolute;
  top: 19px;
  left: 86px;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: var(--neon-green);
  border: 2px solid var(--white);
`;

export const LessonAndInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SvgHeart = styled.svg`
  width: 26px;
  height: 26px;

  fill: none;
  stroke: var(--text-color);
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
`;

export const StyleList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const StyleLevelList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const StyledLevelListItem = styled.li`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 35px;
  border: 1px solid var(--light-grey);

  &:first-of-type {
    border: none;
    background-color: var(--orange);
  }

  &::before {
    content: "#";
    margin-right: -4px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 16px;
`;

export const BtnReadMore = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;

  margin-bottom: 32px;
`;

export const StyledGreySpan = styled.span`
  color: var(--grey);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
