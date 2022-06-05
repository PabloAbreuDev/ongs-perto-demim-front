import CardOng from "../../components/card-ong"
import SearchBox from "../../components/search-box"
import { IOng } from "../../interfaces/ong";

const ongs = [
    {
        ong_foto_perfil: "",
        ong_name: "",
        ong_description: "",
        cep: "",
        bairro: "",
        rua: "",
        numero: "",
        complemento: "",
        cidade: "",
        estado: "",
    },
    {
        ong_foto_perfil: "",
        ong_name: "",
        ong_description: "",
        cep: "",
        bairro: "",
        rua: "",
        numero: "",
        complemento: "",
        cidade: "",
        estado: "",
    },
];


const Home: React.FC = () => {
    return <>
        <SearchBox />
        {ongs.map((item: IOng) => (
            <CardOng
                ong_foto_perfil={item.ong_foto_perfil}
                ong_name={item.ong_name}
                ong_description={item.ong_description}
                cep={item.cep}
                bairro={item.bairro}
                rua={item.rua}
                numero={item.numero}
                complemento={item.complemento}
                cidade={item.cidade}
                estado={item.estado}
            />
        ))}

    </>

}

export default Home