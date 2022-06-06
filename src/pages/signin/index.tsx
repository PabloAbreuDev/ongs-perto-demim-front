import { useState } from "react";
import Input from "../../components/input";
import api from "../../services/api";
import { SignInBox, SignInStyled } from "./styled";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const doLogin = async () => {
    try {
      const { data } = await api.put("/users/login", {
        email,
        password,
      });
      console.log(data);
    } catch (err: any) {
      console.log(err.response.data.message);
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
            <a href="/">esqueci a senha</a>
          </div>
        </div>
      </SignInBox>
    </SignInStyled>
  );
};

export default SignIn;

