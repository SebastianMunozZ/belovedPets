import React, { Component } from "react";
import usuario from "../assets/images/usuario.png";
import { NavLink } from "react-router-dom";

function Header() {
    let logged = sessionStorage.getItem('logged');
    let isVet = sessionStorage.getItem('isVet');
    let nombreUser = sessionStorage.getItem('nombre');

    const logOut = () => {
        sessionStorage.setItem('logged', false);
        sessionStorage.setItem('isVet', false);
        alert("Sesión cerrada con éxito")
        window.location.href = '/';
        logged = sessionStorage.getItem('logged');
    }

    if (logged == "true" && isVet == "false") {
        return <header id="header">
            <div className="center">
                <div id="nombreVet">
                    <span id="brand">
                        <strong>Beloved Pets</strong>
                    </span>
                </div>

                {/* MENU */}
                <nav id="menuloggeado">
                    <ul>
                        <li>
                            <NavLink to="/login">Bienvenido {nombreUser}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/modUsuario">Modificar información de usuario</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={logOut}>Cerrar sesión</NavLink>
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
    } else if (logged == "true" && isVet == "true") {
        return <header id="header">
        <div className="center">
            <div id="nombreVet">
                <span id="brand">
                    <strong>Beloved Pets</strong>
                </span>
            </div>

            {/* MENU */}
            <nav id="menuDr">
                <ul>
                    <li>
                        <NavLink to="/login">Bienvenido Dr./Dra.</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={logOut}>Cerrar sesión</NavLink>
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
    } else {
        return <header id="header">
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
    }


}

export default Header;