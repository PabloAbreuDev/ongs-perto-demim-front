import Navbar from "./navbar"

type Props = {
    children: JSX.Element | JSX.Element[],
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>

        </>
    )
}


export default Layout
