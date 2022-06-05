import CardOngStyled from "./styled";


type Props = {
    ong_foto_perfil: string;
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
    ong_foto_perfil,
    ong_name,
    ong_description,
    cidade,
    estado,
}) => {
    return (
        <CardOngStyled>
            <div className="picture">
                <img src={ong_foto_perfil} alt="Imagem de perfil desta ong" />
            </div>
            <div className="description-box">
                <div className="nome">{ong_name}</div>
                <div className="description">{ong_description}</div>
                <div className="endereco">
                    <div className="estado">{estado}</div>
                    <div className="cidade">{cidade}</div>
                </div>
            </div>
        </CardOngStyled>
    );
};

export default CardOng;
