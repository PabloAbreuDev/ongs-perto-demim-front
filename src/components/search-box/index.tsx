import { useContext, useEffect, useState } from "react";
import { OngContext } from "../../context/ong";
import { IOng } from "../../interfaces/ong";
import api from "../../services/api";
import Input from "../input";
import { SearchBoxStyled } from "./styled";

type Estado = {
  sigla: string;
  id: number;
};

type Cidade = {
  nome: string;
  id: number;
};

const SearchBox = () => {
  const { loadOngs } = useContext(OngContext);

  const [nome, setNome] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");

  const [estado, setEstado] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");

  const [estados, setEstados] = useState<Estado[]>();
  const [cidades, setCidades] = useState<Cidade[]>();

  const getOngs = async () => {
    try {
      const { data } = await api.get<IOng[]>(
        `ongs?estado=${estado === "TODOS OS ESTADOS" ? "" : estado
        }&name=${nome}&tipo=${tipo}&cidade=${cidade === "TODAS AS CIDADES" ? "" : cidade
        }`
      );
      loadOngs(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getEstados = async () => {
    try {
      const { data } = await api.get<Estado[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
      );
      data.unshift({ id: 99, sigla: "TODOS OS ESTADOS" });
      setCidades([{ nome: "TODAS AS CIDADES", id: 99 }]);
      setEstados(data);
    } catch (err) {
      console.log(err);
    }
  };

  // seta as cidades disponiveis
  const setCidadesFn = async (result: any) => {
    try {
      const { data } = await api.get<Cidade[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${result}/municipios`
      );
      data.unshift({ id: 99, nome: "TODAS AS CIDADES" });
      setCidades(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOngs();
    getEstados();
  }, []);

  return (
    <SearchBoxStyled>
      <div className="box">
        <div className="ong-description">
          <div className="item">
            <Input
              value={nome}
              name={"nome"}
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="item">
            <Input
              value={tipo}
              name={"tipo"}
              placeholder="Tipo"
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>
        </div>
        <div className="ong-location">
          <div className="left">
            <div className="item estado">
              <select
                onChange={(e) => [
                  setCidadesFn(e.target.value),
                  setEstado(e.target.value),
                ]}
              >
                {estados?.map((item: Estado) => (
                  <option value={item.sigla}>{item.sigla}</option>
                ))}
              </select>
            </div>
            <div className="item cidade">
              <select onChange={(val) => setCidade(val.target.value)}>
                {cidades?.map((item: Cidade) => (
                  <option value={item.nome}>{item.nome}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="item buscar">
            <button onClick={() => getOngs()}>Buscar</button>
          </div>
        </div>
      </div>
    </SearchBoxStyled>
  );
};

export default SearchBox;
