
import jpIMG from '../../assets/logo.png';
import './styles.css'



export const LayoutMenuNav = () => {

    return (
        <div>
            <div id="viewport">
                <div id="sidebar">
                    <header>
                        <div className="redlack-titulo">
                        <a href="/register">MaintEscalators</a>
                        </div>
                        <div className="redlack-contact-container">
                        <img src={jpIMG} className="logo-redlack" alt="Jovem Programador" />
                        </div>
                    </header>
                    <ul class="nav">
                        <li>
                            <a href="/consult">
                                <i class="zmdi zmdi-view-usuario"></i> Equipamentos
                            </a>
                        </li>
                        <li>
                            <a href="/consult">
                                <i class="zmdi zmdi-colaboradores"></i> Almoxarifado
                            </a>
                        </li>
                        <li>
                            <a href="/consult">
                                <i class="zmdi zmdi-equipes"></i> Fábrica
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    )
}
