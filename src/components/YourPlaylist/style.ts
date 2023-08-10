import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  background: var(--gray-400);
  border-radius: var(--br);
  padding: var(--pad);
  color: var(--white);

  & h4 {
    font-size: 16px;
  }

  & p {
    font-size: 14px;
  }

  & .btn {
    margin-top: 15px;
  }
`;
