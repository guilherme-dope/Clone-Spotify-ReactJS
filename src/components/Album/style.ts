import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gray-700);
  padding: var(--pad);
  border-radius: var(--br);
  width: 195px;
  gap: var(--gap);
  position: relative;

  &:hover {
    background: var(--gray-800);
    cursor: pointer;
    transition: 0.6s ease;

    & a {
      transition: 0.6s ease;
      top: 122px;
      background: rgba(31, 223, 100, 1);
      color: rgba(0, 0, 0, 1);
    }
  }

  & img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 24px 1px rgba(0, 0, 0, 0.75);
  }

  & h3 {
    font-size: 16px;
  }

  & p {
    font-size: 14px;
    color: var(--gray-300);
  }

  & a {
    display: flex;
    position: absolute;
    right: 25px;
    top: 133px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    color: rgba(0, 0, 0, 0);
    width: 48px;
    height: 48px;
    background: rgba(31, 223, 100, 0);
  }
`;
