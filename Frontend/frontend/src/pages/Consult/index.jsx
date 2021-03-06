import { useEffect, useState } from "react";
import { BASE_URL } from '../../utils/requests';
import { LayoutMenuNav } from "../../components/LayoutMenuNav";
import axios from "axios";
import { LayoutConsult } from "../../components/LayoutConsult";
import { Link } from "react-router-dom";



export const Consult = () => {

    const [usuario, setUsuario] = useState([]);
    const [aux, setAux] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/equipamentos`)
            .then(response => {
                setUsuario(response.data);
                console.log(usuario)
            });
    }, [aux]);

    return (
        <div>
            <LayoutMenuNav />
                <div className="wrap-login-consult">
                <span className="login-form-title">Consulta de Equipamentos</span>
                <Link to="/register">
                    <div className="container-login-form-btn">
                        <button className="login-form-btn"> Cadastrar </button>
                    </div>
                </Link>

                <div >
                    <ul>
                    {usuario.map(( us=> (
                        <LayoutConsult
                            key={us.id}
                            codigo={us.codigo}
                            quantidade={us.quantidade}
                            afiliado={us.afiliado}
                            id={us.id}
                        />
                    )))}
                    </ul>
                </div>
                </div>
        </div>
    );

}