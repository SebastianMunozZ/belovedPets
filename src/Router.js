import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Registrarse from "./components/Registrarse";
import Login from "./components/Login";


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                {/* CONFIGURAR RUTAS Y PÁGINAS */}
                <Header />
                <Routes>
                    <Route path="/" element={<Nosotros />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registrarse/>} />

                </Routes>


            </BrowserRouter>
        );
    }
}

export default Router;