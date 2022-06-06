import styled from "styled-components";

export const InputStyled = styled.div`
  input[type="text"],
  input[type="password"] {
    padding: 8px 0;
    margin: 8px 0;
    box-sizing: border-box;
    text-align: center;
    border-radius: 5px;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;

