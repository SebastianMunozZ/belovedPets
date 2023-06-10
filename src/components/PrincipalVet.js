import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

function PrincipalVet() {

    const create = (e) => {
        e.preventDefault();
        window.location.href = '/crearPaciente';
    }
    const update = (e) => {
        e.preventDefault();
        window.location.href = '/updatePaciente';
    }
    const ver = (e) => {
        e.preventDefault();
        window.location.href = '/verPaciente';
    }
    const eliminar = (e) => {
        e.preventDefault();
        window.location.href = '/eliminarPaciente';
    }
    return (
        <div className="button-container">
            <button className="my-button" onClick={create}>Crear registro de paciente</button>
            <button className="my-button" onClick={update}>Modificar registro</button>
            <button className="my-button" onClick={ver}>Ver registros</button>
            <button className="my-button" onClick={eliminar}>Eliminar registro</button>
        </div>
    );

}

export default PrincipalVet;