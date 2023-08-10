import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 345px 1fr;
  gap: 10px;
  height: 100vh;

  & aside {
    background: red;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }


`