import { useEffect, useState } from "react";
import Input from "../../components/input";
import useAuth from "../../hooks/use-auth";
import { IUser } from "../../interfaces/user";
import api from "../../services/api";
import { SignInBox, SignInStyled } from "./styled";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.pathname || "/";


  const { setAuth, user } = useAuth();

  const MySwal = withReactContent(Swal)

  // Verifica se está logado
  useEffect(() => {
    async function redirectLogin() {
      if (user._id !== "") {
        navigate('/', { replace: true });
        return
      }
    }
    redirectLogin()

  }, [])

  const doLogin = async () => {

    try {
      // Logando
      const loginResponse = await api.put<{ token: string, refreshToken: string }>("/users/login", {
        email,
        password,
      });

      const decoded: { user_id: string } = jwt_decode(loginResponse.data.token);

      // Recuperando dados do usuário com o user_id
      const meResponse = await api.get<{ firstName: string, lastName: string, email: string }>(`/users/me/${decoded.user_id}`);

      // Criando um usuário base
      const myUser: IUser = {
        _id: decoded.user_id,
        name: meResponse.data.firstName,
        email: meResponse.data.email,
      }

      // Setando autenticação
      setAuth(myUser, loginResponse.data.token)

      // Salvando refresh token no localStorage
      localStorage.setItem("@App:refresh", loginResponse.data.refreshToken)
      localStorage.setItem("@App:token", loginResponse.data.token)
      localStorage.setItem("@App:user", decoded.user_id)
      navigate('/', { replace: true });
    } catch (err: any) {
      MySwal.fire({ title: err.response.data.message, icon: "error" })
    }
  };

  return (
    <SignInStyled>
      <SignInBox>
        <div className="login-title">Entrar</div>
        <div className="login-inputs">
          <div className="form">
            <Input
              value={email}
              type="text"
              name="email"
              placeholder="Informe o email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              value={password}
              type="password"
              name="password"
              placeholder="informe a senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-entrar" onClick={() => doLogin()}>
            Entrar
          </div>
          <div className="esqueci-a-senha">
            <a href="/">esqueci a senha</a> <br /> <br />
            <a href="/">criar uma conta</a>
          </div>
        </div>
      </SignInBox>
    </SignInStyled>
  );
};

export default Login;

