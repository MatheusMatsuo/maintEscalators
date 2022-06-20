import { LayoutComponents } from "../../components/LayoutComponents";
import jpIMG from '../../assets/logo.png';
import { LayoutMenuNav } from "../../components/LayoutMenuNav";
import { BASE_URL } from '../../utils/requests';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const navigate = useNavigate();

    /*
    const [usuario, setUsuario] = useState();
        useEffect(() => {
            axios.get(`${BASE_URL}/usuarios`)
                .then(response => {
                    setUsuario(response.data);
                });
        },);
        */

    const handleSubmit = (event) => {

        event.preventDefault();

        const codigo = (event.target).codigo.value;
        const quantidade = (event.target).quantidade.value;
        const afiliado = (event.target).afiliado.value;



        const config = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/equipamentos',
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



    return (
        <div>
            <LayoutMenuNav />
            <LayoutComponents>
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="login-form-title">Cadastrar Equipamento</span>
                    <span className="login-form-title">
                        <img src={jpIMG} alt="Jovem Programador" />
                    </span>

                    <div className="wrap-input">
                        <label htmlFor="codigo">Informe seu codigo</label>
                        <input type="nome" className="has-val input" id="codigo" />
                    </div>

                    <div className="wrap-input">
                        <label htmlFor="quantidade">Informe a quantidade</label>
                        <input type="number" className="has-val input" id="quantidade" />
                    </div>

                    <div className="wrap-input">
                    <label htmlFor="afiliado">Informe seu afiliado</label>
                    <input type="nome" className="has-val input" id="afiliado" />
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn" type='submit'>Cadastrar</button>
                    </div>
                </form>
            </LayoutComponents>
        </div>
    )
}