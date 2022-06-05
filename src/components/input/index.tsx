import { InputHTMLAttributes } from "react";
import { InputStyled } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}


const Input: React.FC<InputProps> = (props) => {
    return <InputStyled><input {...props} /></InputStyled>
}

export default Input