import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Registrarse from "./components/Registrarse";
import Login from "./components/Login";
import ModUsuario from "./components/ModUsuario";
import PrincipalVet from "./components/PrincipalVet";
import CrearPaciente from "./components/CrearPaciente";
import UpdatePaciente from "./components/UpdatePaciente";
import VerPaciente from "./components/VerPaciente";
import EliminarPaciente from "./components/EliminarPaciente";
import BusquedaUpdate from "./components/BusquedaUpdate";
import FormUpdate from "./components/FormUpdate";


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
                    <Route path="/modUsuario" element={<ModUsuario/>} />
                    <Route path="/principalVet" element={<PrincipalVet/>} />
                    <Route path="/crearPaciente" element={<CrearPaciente/>} />
                    <Route path="/updatePaciente" element={<UpdatePaciente/>} />
                    <Route path="/verPaciente" element={<VerPaciente/>} />
                    <Route path="/eliminarPaciente" element={<EliminarPaciente/>} />
                    <Route path="/busquedaUpdate" element={<BusquedaUpdate />} />
                    <Route path="/formUpdate" element={<FormUpdate />} />


                </Routes>


            </BrowserRouter>
        );
    }
}

export default Router;