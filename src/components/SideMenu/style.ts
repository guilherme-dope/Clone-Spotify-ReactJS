import styled from "styled-components";

export const Container = styled.div`
    
  background-color: var(--gray);
  border-radius: 8px;
  height: 112px;
  padding: 20px;

  
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    
    & li {
      
       a {
         display: flex;
         align-items: center;
         gap: 14px;
         font-size: 16px;
         font-weight: 700;
         color: var(--gray-300);
         text-decoration: none;
         
         &:hover {
           color: var(--white)
         }
         
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`