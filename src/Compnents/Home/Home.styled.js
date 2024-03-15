import styled from "@emotion/styled";

export const MainInfoWrapper = styled.div`
  display: flex;
  column-gap: 24px;
  margin-bottom: 24px;
  width: 100%;
`;

export const LeftPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 64px 98px;
  width: fit-content;
  border-radius: 30px;
  background: #f8f8f8;
`;

export const Title = styled.h1`
  max-width: 558px;

  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  color: var(--text-color);
`;

export const StyledSpan = styled.span`
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  background-color: var(--yellow);
  color: var(--text-color);
`;

export const Paragraph = styled.p`
  max-width: 471px;
  margin-bottom: 32px;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  color: var(--text-color);
`;

export const BtnGetStarted = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  width: fit-content;
  color: var(--text-color);

  padding: 16px 88px;
  border-radius: 12px;
  border: none;
  background: var(--orange);

  &:hover {
    background-color: var(--text-color);
    color: var(--orange);
    transition: background-color 0.4s ease, color 0.4s ease;
  }
`;

export const ListWrapper = styled.div`
  width: 1324px;
  padding: 40px 123px;
  border-radius: 30px;
  border: 2px dashed var(--orange);
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const StyledCount = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
  color: var(--text-color);
`;

export const SubText = styled.p`
  width: 93px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  color: var(--sub-text);
`;
