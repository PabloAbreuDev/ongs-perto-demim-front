import { useParams } from "react-router-dom"

const SeeOng: React.FC = () => {
    let { id } = useParams();
    return <>{id}</>
}

export default SeeOng