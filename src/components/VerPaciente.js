import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

function VerPaciente() {

    let pet = JSON.parse(sessionStorage.getItem('pet'));
    const [searchName, setSearchName] = useState('');

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

    const recibirFormulario = (e) => {
        e.preventDefault();

        const search = {
            searchName: searchName
        }

        if (search.searchName == pet.nombre) {
            sessionStorage.setItem('validSearch', true);
            window.location.href = '/busquedaUpdate';
        } else {
            sessionStorage.setItem('validSearch', false);
            alert("No existen registros")
        }
        

    }
    return (
        <div>
        <section>
            <div className="button-container">
                <button className="my-button" onClick={create}>Crear registro de paciente</button>
                <button className="my-button" onClick={update}>Modificar registro</button>
                <button className="my-button" onClick={ver}>Ver registros</button>
                <button className="my-button" onClick={eliminar}>Eliminar registro</button>
            </div>
        </section>
        <section>
            <div id="formulario">
                <div className="center">
                    <div id="form">
                        <h2 className="subheader">Buscar paciente</h2>

                        <form className="mid-form" onSubmit={recibirFormulario} >
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre de la mascota(*)</label>
                                <input type="text" name="nombre" onChange={(event) => setSearchName(event.target.value)} />
                            </div>

                            <h4 className="dato-obligatorio">(*) Los datos marcados son obligatorios</h4>

                            <div className="clearfix"></div>

                            <div>
                                <input type="submit" value="buscar" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );


}

export default VerPaciente;