import Input from "../../components/input"
import { SignInBox, SignInStyled } from "./styled"

const SignIn: React.FC = () => {
    return <SignInStyled>
        <SignInBox>
            <div className="login-title">Entrar</div>
            <div className="login-inputs">
                <div className="form">
                    <Input type="text" name="email" placeholder="Informe o email" />
                    <Input type="text" name="password" placeholder="informe a senha" />
                </div>
                <div className="login-entrar">Entrar</div>
                <div className="esqueci-a-senha">
                    <a href="/" >esqueci a senha</a>
                </div>
            </div>
        </SignInBox>
    </SignInStyled>
}

export default SignIn