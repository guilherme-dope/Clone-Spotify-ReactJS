import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  background: var(--white);
  height: 32px;
  border: none;
  border-radius: 15px;
  padding: 0 var(--pad);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
