import React, { Component } from "react";
import usuario from "../assets/images/usuario.png";
import { NavLink } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    <div id="nombreVet">
                        <span id="brand">
                            <strong>Beloved Pets</strong>
                        </span>
                    </div>

                    {/* MENU */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/login">Iniciar sesión</NavLink>
                            </li>
                            <li>
                                <NavLink to="/registro">Registrarse</NavLink>
                            </li>
                            <div>
                                <img src={usuario} className="userLogo" alt="Logotipo" />
                            </div>
                        </ul>

                    </nav>
                    {/*LIMPIAR FLOTADOS*/}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;