import styled from "styled-components";

export const NavbarStyled = styled.div`
  background-color: violet;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .brand {
    margin-left: 20px;
  }

  .menu {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;

      li {
        padding: 0 15px;
        &:hover {
          cursor: pointer;
          color: white;
        }
      }
    }
  }
`;
