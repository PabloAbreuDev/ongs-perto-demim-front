import { Link } from "react-router-dom";
import { NavbarStyled } from "./styled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="brand">Ongs Perto</div>
      <div className="menu">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/signin"}>
            <li>Entrar</li>
          </Link>
          <li>Cadastrar</li>
          <li>Criar Ong</li>
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
