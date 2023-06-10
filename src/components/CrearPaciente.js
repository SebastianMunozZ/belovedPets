import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

function CrearPaciente() {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [enf, setEnf] = useState('');
    const [vac, setVac] = useState('');
    const [med, setMed] = useState('');
    const [nomDu, setNomDu] = useState('');
    const [info, setInfo] = useState('');


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

        const pet = {
            nombre: nombre,
            edad: edad,
            enf: enf,
            vac: vac,
            med: med,
            nomDu: nomDu,
            info: info
        }
        sessionStorage.setItem('pet', JSON.stringify(pet));
        alert("Registro creado exitosamente.");
        window.location.href = '/principalVet';
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
                            <h1 className="subheader">Crear registro de paciente</h1>

                            <form className="mid-form" onSubmit={recibirFormulario}>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre de la mascota(*)</label>
                                    <input type="text" name="nombre" onChange={(event) => setNombre(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Edad de la mascota</label>
                                    <input type="text" name="nombre" onChange={(event) => setEdad(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Enfermedades</label>
                                    <input type="text" name="nombre" onChange={(event) => setEnf(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Vacunas</label>
                                    <input type="text" name="nombre" onChange={(event) => setVac(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Medicamentos</label>
                                    <input type="text" name="nombre" onChange={(event) => setMed(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre del dueño(*)</label>
                                    <input type="text" name="nombre" onChange={(event) => setNomDu(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Otra información</label>
                                    <textarea type="text" name="nombre" onChange={(event) => setInfo(event.target.value)} />
                                </div>

                                <h4 className="dato-obligatorio">(*) Los datos marcados son obligatorios</h4>

                                <div className="clearfix"></div>

                                <div>
                                    <NavLink type="" value="Cancelar" className="btn btn-cancel" to="/principalVet">Cancelar</NavLink>
                                    <input type="submit" value="Crear Registro" className="btn btn-success" />
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default CrearPaciente;