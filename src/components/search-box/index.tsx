import Input from "../input"
import { SearchBoxStyled } from "./styled"

const SearchBox = () => {
    return <SearchBoxStyled>
        <div className="box">
            <div className="ong-description">
                <div className="item">
                    <Input name={""} placeholder="Nome" />
                </div>
                <div className="item">
                    <Input name={""} placeholder="Tipo" />
                </div>
            </div>
            <div className="ong-location">
                <div className="left">
                    <div className="item estado">
                        <select>
                            <option value="">Opcao 1</option>
                            <option value="">Opcao 2</option>
                            <option value="">Opcao 3</option>
                        </select>
                    </div>
                    <div className="item cidade">
                        <select>
                            <option value="">Opcao 1</option>
                            <option value="">Opcao 2</option>
                            <option value="">Opcao 3</option>
                            <option value="">Hashura</option>
                        </select>
                    </div>
                </div>
                <div className="item buscar">
                    <button>Buscar</button>
                </div>
            </div>
        </div>

    </SearchBoxStyled>
}

export default SearchBox