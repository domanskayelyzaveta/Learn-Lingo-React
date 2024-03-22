import styled from "@emotion/styled";

export const StyledBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContent = styled.div`
  position: relative;

  background: white;
  max-height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--light-blue-4);
  }

  scrollbar thumb:hover {
    background-color: var(--dark-blue);
  }

  border-radius: 10px;
`;

export const SvgCross = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 32px;
  height: 32px;
  stroke: var(--text-color);

  cursor: pointer;
`;
