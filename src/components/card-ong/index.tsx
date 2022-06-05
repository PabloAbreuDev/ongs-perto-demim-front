import { textAbbreviation } from "../../utils/text-transform";
import CardOngStyled from "./styled";


type Props = {
    fotoDePerfil: string;
    ong_name: string;
    ong_description: string;
    cep: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade: string;
    estado: string;
};

const CardOng: React.FC<Props> = ({
    fotoDePerfil,
    ong_name,
    ong_description,
    cidade,
    estado,
}) => {
    return (
        <CardOngStyled>
            <div className="picture">
                <img src={fotoDePerfil} alt="Imagem de perfil desta ong" />
            </div>
            <div className="description-box">
                <div className="nome"><p>{ong_name}</p></div>
                <div className="description"><p>{textAbbreviation(ong_description)}</p></div>
                <div className="endereco">
                    <div className="estado">{estado}</div>
                    <div className="cidade">{cidade}</div>
                </div>
            </div>
        </CardOngStyled>
    );
};

export default CardOng;
