import React, { Component } from "react";
import usuario from "../assets/images/usuario.png";
import { NavLink } from "react-router-dom";

function Header() {
    let logged = sessionStorage.getItem('logged');

    const logOut = () => {
        sessionStorage.setItem('logged', false);
        alert("Sesión cerrada con éxito")
        window.location.href = '/';
        logged = sessionStorage.getItem('logged');
    }

    return (
        <header id="header">
            <div className="center">
                <div id="nombreVet">
                    <span id="brand">
                        <strong>Beloved Pets</strong>
                    </span>
                </div>

                {/* MENU */}
                {logged == "true" ? <nav id="menuloggeado">
                    <ul>
                        <li>
                            <NavLink to="/login">Bienvenido Sebastian</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={logOut}>Cerrar sesión</NavLink>
                        </li>
                        <div>
                            <img src={usuario} className="userLogo" alt="Logotipo" />
                        </div>
                    </ul>

                </nav> : <nav id="menu">
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

                </nav>}
                
                {/*LIMPIAR FLOTADOS*/}
                <div className="clearfix"></div>
            </div>
        </header>
    );

}

export default Header;