import styled from 'styled-components'

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
  
  & button{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    font-size: 15px;
    font-weight: 700;
    background: var(--white);
    height: 32px;
    border: none;
    border-radius: 15px;
    padding: 0 var(--pad);
    
      &:hover{
        cursor: pointer;
        transform: scale(1.05);
      }
  }
`