import { Nav } from '../Nav'
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

                <div id="content">
                        <div class="container-fluid">
                            <Nav />
                        </div>
                </div>
            </div>
        </div>


    )
}
