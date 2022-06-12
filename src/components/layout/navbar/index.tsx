import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import useLogout from "../../../hooks/use-logout";
import { NavbarStyled } from "./styled";

const Navbar = () => {

  const { user } = useAuth()
  const [{ logout }] = useLogout()
  const navigate = useNavigate()

  const doLogout = () => {
    logout()
    navigate("/login", { replace: true })
  }

  return (
    <NavbarStyled>
      <div className="brand">Ongs Perto</div>
      <div className="menu">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          {
            user._id === "" ? <Link to={"/login"}>
              <li>Entrar</li>
            </Link> : <button onClick={() => doLogout()}>Logout</button >
          }

          <li>Cadastrar</li>
          <li>Criar Ong</li>
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
