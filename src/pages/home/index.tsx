import { useContext } from "react";
import CardOng from "../../components/card-ong";
import SearchBox from "../../components/search-box";
import { IOng } from "../../interfaces/ong";
import { HomeStyled } from "./styled";

import noimage from "../../assets/default_image.jpg";
import { OngContext } from "../../context/ongs";

const Home: React.FC = () => {
  const { ongs } = useContext(OngContext);

  return (
    <HomeStyled>
      <SearchBox />
      <div className="cards">
        {ongs.map((item: IOng) => (
          <CardOng
            fotoDePerfil={
              item.fotoDePerfil
                ? `https://rent-a-space.s3.sa-east-1.amazonaws.com/${item.fotoDePerfil}`
                : noimage
            }
            ong_name={item.name}
            ong_description={item.descricao}
            cep={item.cep}
            bairro={item.bairro}
            rua={item.rua}
            numero={item.numero}
            complemento={item.complemento}
            cidade={item.cidade}
            estado={item.estado}
          />
        ))}
      </div>
    </HomeStyled>
  );
};

export default Home;
