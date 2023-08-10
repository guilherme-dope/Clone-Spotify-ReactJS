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

  & main {
    display: flex;
    flex-direction: column;

    & header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--gray);
      height: 64px;
      border-radius: var(--br) var(--br) 0 0;
      padding: 0 var(--pad);

      & .navigation {
        display: flex;
        gap: var(--gap);

        & a {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray-900);
          border-radius: 50%;
          width: 32px;
          height: 32px;

          & svg {
            height: 18px;
          }
        }

      }

      & .menu {
        display: flex;
        align-items: center;
        gap: var(--gap);

        & .space {

          margin: 0 15px;
        }

        & .btn {
          margin-left: 20px;

          & button {
            height: 48px;
            border-radius: 40px;
            padding: 0 30px;

          }
        }
      }
    }
  }

`;
