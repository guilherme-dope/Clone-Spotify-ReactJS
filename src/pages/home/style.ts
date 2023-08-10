import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 345px 1fr;
  gap: var(--gap);
  height: 100vh;

  & aside {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`;
