import styled from "styled-components";

export const ContainerStyled = styled.div`
display: flex;
  flex-wrap: wrap;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`