import { NavbarStyled } from "./styled";


const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="brand">Ongs Perto</div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Entrar</li>
                    <li>Cadastrar</li>
                    <li>Criar Ong</li>
                </ul>
            </div>
        </NavbarStyled>
    );
};

export default Navbar;
