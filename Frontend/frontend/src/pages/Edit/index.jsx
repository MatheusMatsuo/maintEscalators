import { LayoutComponents } from "../../components/LayoutComponents";
import jpIMG from '../../assets/logo.png';
import { LayoutMenuNav } from "../../components/LayoutMenuNav";
import { validateEmail } from '../../utils/validade';
import { BASE_URL } from '../../utils/requests';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';



export const Edit = ({id}) =>{
    
    const navigate = useNavigate();

    
    const [usuario, setUsuario] = useState();

        useEffect(() => {
            axios.get(`${BASE_URL}/equipamentos/${id}`)
                .then(response => {
                    setUsuario(response.data);
                });
        },[id]);
        

    const handleSubmit = (event) => {

        event.preventDefault();

        const codigo = (event.target).codigo.value;
        const quantidade = (event.target).quantidade.value;
        const afiliado = (event.target).afiliado.value;

        const config = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: `/equipamentos/editar/${id}`,
            data: {
                codigo: codigo,
                quantidade: quantidade,
                afiliado: afiliado

            }
        }

        axios(config).then(response => (
            navigate("/consult")
        ));
    };

    const handleSubmitDelet = (event) => {

        event.preventDefault();

        const config = {
            baseURL: BASE_URL,
            method: 'DELETE',
            url: `/equipamentos/deletar/${id}`,
        }

        axios(config).then(response => (
            navigate("/consult")
        ));
    };
    
    return (
        <div>
            <LayoutMenuNav />
            <LayoutComponents>
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="login-form-title">Editar Equipamento</span>
                    <span className="login-form-title">
                        <img src={jpIMG} alt="Jovem Programador" />
                    </span>

                    <div className="wrap-input">
                        <label htmlFor="codigo">Informe seu codigo</label>
                        <input type="nome" className="has-val input" id="codigo" value={usuario?.codigo} onChange={() => setUsuario().codigo}/>
                    </div>

                    <div className="wrap-input">
                        <label htmlFor="quantidade">Informe a quantidade</label>
                        <input type="nome" className="has-val input" id="quantidade" value={usuario?.quantidade} onChange={() => setUsuario().quantidade}/>
                    </div>

                    <div className="wrap-input">
                    <label htmlFor="afiliado">Informe seu afiliado</label>
                <input type="nome" className="has-val input" id="afiliado" value={usuario?.afiliado} onChange={() => setUsuario().afiliado} />
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn" type='submit'>Editar</button>
                    </div>
                    <div className="container-login-form-btn">
                        <button className="login-form-btn" onClick={handleSubmitDelet}>Deletar</button>
                    </div>
                </form>
            </LayoutComponents>
        </div>
    )
}