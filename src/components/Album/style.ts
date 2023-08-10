import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gray-900);
  background: linear-gradient(0deg, rgba(47, 47, 47, 1) 0%, rgba(25, 25, 25, 1) 100%);
  padding: var(--pad);
  border-radius: var(--br);
  width: 195px;
  gap: var(--gap);
  position: relative;

  &:hover {
    background: var(--gray-400);
    cursor: pointer;

    & a {
      display: flex;
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
    display: none;
    position: absolute;
    right: 25px;
    top: 122px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    color: var(--black);
    width: 48px;
    height: 48px;
    background: #1fdf64;
  }


`
