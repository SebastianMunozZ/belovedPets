import React, { Component, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function FormUpdate() {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [enf, setEnf] = useState('');
    const [vac, setVac] = useState('');
    const [med, setMed] = useState('');
    const [nomDu, setNomDu] = useState('');
    const [info, setInfo] = useState('');

    useEffect(() => {
        let pet = JSON.parse(sessionStorage.getItem('pet'));

        if (pet) {
            setNombre(pet.nombre);
            setEdad(pet.edad);
            setEnf(pet.enf);
            setVac(pet.vac);
            setMed(pet.med);
            setNomDu(pet.nomDu);
            setInfo(pet.info);
        }
    }, []);

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
        alert("Registro actualizado exitosamente.");
        window.location.href = '/principalVet';
    }

    return (
        <div id="formulario">
            <div className="center">
                <div id="form">
                    <h1 className="subheader">Modificar información de paciente</h1>

                    <form className="mid-form" onSubmit={recibirFormulario}>
                    <div className="form-group">
                                    <label htmlFor="nombre">Nombre de la mascota(*)</label>
                                    <input type="text" name="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Edad de la mascota</label>
                                    <input type="text" name="nombre" value={edad} onChange={(event) => setEdad(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Enfermedades</label>
                                    <input type="text" name="nombre" value={enf} onChange={(event) => setEnf(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Vacunas</label>
                                    <input type="text" name="nombre" value={vac} onChange={(event) => setVac(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Medicamentos</label>
                                    <input type="text" name="nombre" value={med} onChange={(event) => setMed(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre del dueño(*)</label>
                                    <input type="text" name="nombre" value={nomDu} onChange={(event) => setNomDu(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Otra información</label>
                                    <textarea type="text" name="nombre" value={info} onChange={(event) => setInfo(event.target.value)} />
                                </div>


                        <h4 className="dato-obligatorio">(*) Los datos marcados son obligatorios</h4>

                        <div className="clearfix"></div>

                        <div>
                            <NavLink type="" value="Cancelar" className="btn btn-cancel" to="/principalVet">Cancelar</NavLink>
                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );

}

export default FormUpdate;