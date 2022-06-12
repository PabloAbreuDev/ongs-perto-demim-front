import { useEffect, useState } from "react"
import api from "../../../services/api"
import { maskCEP } from "../../../utils/text-transform";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useAxiosPrivate from "../../../hooks/use-private-axios";

type Location = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
}
const CreateOng: React.FC = () => {

    const [nome, setNome] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")

    const [cep, setCep] = useState<string>("")
    const [logradouro, setLogradouro] = useState<string>("")
    const [complemento, setComplemento] = useState<string>("")
    const [bairro, setBairro] = useState<string>("")
    const [numero, setNumero] = useState<string>("")
    const [cidade, setCidade] = useState<string>("")
    const [estado, setEstado] = useState<string>("")

    const privateRequest = useAxiosPrivate()

    const MySwal = withReactContent(Swal)

    // Garantir re-render
    useEffect(() => {
    }, [cep, logradouro, complemento, bairro, numero, cidade, estado])


    const getLocation = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        if (value.length === 8) {
            const { data } = await api.get<Location>(`https://viacep.com.br/ws/${value}/json/`)
            setLogradouro(data.logradouro)
            setCidade(data.localidade)
            setComplemento(data.complemento)
            setBairro(data.bairro)
            setEstado(data.uf)
        }
    }

    const createOng = async () => {
        try {
            const { data } = await privateRequest.post("http://localhost:3001/api/ongs", {
                name: nome,
                cep: cep.replaceAll("-", ""),
                descricao: descricao,
                bairro: bairro,
                rua: logradouro,
                numero: numero,
                complemento: complemento,
                cidade: cidade,
                estado: estado,
            })
            MySwal.fire({ title: data.msg, icon: "success" })

        } catch (err: any) {
            if (err.response.data.status === 403) {
                console.log(err.response.data)
                return
            }
            MySwal.fire({ title: err.response.data.message, icon: "error" })
        }
    }


    return <>
        <div>Criar ONG</div>
        <div>
            Nome <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} />
        </div>
        <div>
            Descrição <input type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao} />
        </div>
        <div>
            Cep: <input onChange={(e) => [setCep(e.target.value), getLocation(e)]} value={maskCEP(cep)} />
        </div>
        <div>
            Logradouro: <input type="text" onChange={(e) => setLogradouro(e.target.value)} value={logradouro} />
        </div>
        <div>
            Complemento: <input type="text" onChange={(e) => setComplemento(e.target.value)} value={complemento} />
        </div>
        <div>
            Bairro: <input type="text" onChange={(e) => setBairro(e.target.value)} value={bairro} />
        </div>
        <div>
            Numero: <input type="text" onChange={(e) => setNumero(e.target.value)} value={numero} />
        </div>
        <div>
            Cidade: <input type="text" onChange={(e) => setCidade(e.target.value)} value={cidade} />
        </div>
        <div>
            Estado: <input type="text" onChange={(e) => setEstado(e.target.value)} value={estado} />
        </div>
        <button onClick={() => createOng()}>Criar</button>
    </>
}

export default CreateOng