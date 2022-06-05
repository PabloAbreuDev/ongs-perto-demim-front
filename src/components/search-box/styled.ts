import styled from "styled-components";

export const SearchBoxStyled = styled.div`
  background-color: orange;
  padding: 30px;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin: 0 auto;

    input,
    select {
      width: 100%;
    }

    .ong-description {
      padding: 5px;
      width: 100%;
      display: flex;

      .item {
        width: 50%;
        padding: 0 5px;
      }

      @media (max-width: 700px) {
        flex-direction: column;

        .item {
          width: 100%;
           padding: 5px;
        }
      }
    }

    .ong-location {
      padding: 5px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .item {
        padding: 0 5px;
      }

      .left {
        display: flex;
        width: 100%;
        .estado {
          width: 70%;
        }

        .cidade {
          width: 30%;
        }
      }

      @media (max-width: 700px) {
        flex-direction: column;


        .item {
          width: 100%;
          padding:  5px;
        }

        .buscar {
          margin-top: 5px;
        }
      }
    }
    @media (max-width: 700px) {
      width: 80%;
    }
  }
`;
