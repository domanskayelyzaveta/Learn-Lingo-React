import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;

  width: 566px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 20px;

  color: var(--text-color);
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 40px;

  color: rgba(18, 20, 23, 0.8);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Input = styled.input`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  &::placeholder {
    color: var(--text-color);
  }
`;

export const SubmitBtn = styled.button`
  width: 438px;
  padding: 16px;
  margin-top: 22px;

  border: none;
  border-radius: 12px;
  background: var(--orange);

  color: var(--text-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;


`;
