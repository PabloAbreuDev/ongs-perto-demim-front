import styled from "styled-components";

const CardOngStyled = styled.div`
  display: flex;
  width: 50vw;
  height: 220px;
  overflow: hidden;
  background-color: gainsboro;
  margin: 15px 0;
  .picture {
    width: 30%;
    img {
      width: 100%;
      height: 220px;
    }
  }
  .description-box {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 5px;

    .nome {
      p {
        font-size: 1.5rem;
      }
    }

    .description {
      height: 200px;
      p {
        font-size: 1.1rem;
        margin: 10px 0;
      }
    }

    .endereco {
      display: flex;

      .cidade, .estado {
        border: solid 1px black;
        border-radius: 8px;
        padding: 5px;
        margin: 0 4px;
        background-color: #93B5ED;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 800px) {
    width: 80vw;
    
  }

  @media (max-width: 500px) {
    width: 80vw;
    flex-direction: column;
    height:500px;
    .picture {
      width: 100%;
      img {
        width: 100%;
        height: 220px;
      }
    }

    .description-box {
       width: 100%;
    }
  }
`;

export default CardOngStyled;
