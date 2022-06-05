import { ContainerStyled } from "./styled"

type Props = {
    children: JSX.Element,
};
const Container = ({ children }: Props) => (
    <ContainerStyled>
        {children}
    </ContainerStyled>
);

export default Container