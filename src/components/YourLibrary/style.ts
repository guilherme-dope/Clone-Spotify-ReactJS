import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);
  color: var(--gray-300);
  border-radius: var(--br);
  padding: var(--pad);
  flex: 1;

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .title {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    & .icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      &:hover {
        background: var(--gray-500);
      }

      & svg {
        height: 20px;
        width: 20px;
        font-weight: 1000;
      }
    }
  }

  & section {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    padding: var(--pad) 0;
  }
`;
