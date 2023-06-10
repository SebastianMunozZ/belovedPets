import React, { Component, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function FormRegistrarMascota() {
    const [nombre, setNombre] = useState('');
    const [campos, setCampos] = useState([{ nombre: '', valor: '' }]); // Estado para almacenar los campos con nombre y valor

    const agregarCampo = () => {
        setCampos([...campos, { nombre: '', valor: '' }]); // Agregar un nuevo campo vacío al array de campos
    };

    const handleChange = (valor, index, campo) => {
        const nuevosCampos = [...campos];
        nuevosCampos[index][campo] = valor;
        setCampos(nuevosCampos);
    };

    const guardarDatos = () => {
        const datos = campos.reduce((obj, campo) => {
            if (campo.nombre && campo.valor) {
                obj[campo.nombre] = campo.valor;
            }
            return obj;
        }, {});
        datos.nombre = nombre;
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.location.href = '/misMascotas';
        console.log(datos);
    };

    return (
        <div>
            <h3 className="subheader">Registrar mascota</h3>
            <p>Puedes agregar la información que quieras, sólo indica el nombre del campo y debajo escribe el valor (el nombre de tu mascota es obligatorio).</p>
            <section>
                <div id="formulario">
                    <div className="center">
                        <div id="form">
                            <form className="mid-form" >
                                <div >
                                    <label htmlFor="nombre">Nombre de la mascota(*)</label>
                                    <input type="text" placeholder="ingresa el nombre de tu mascota" name="nombre" onChange={(event) => setNombre(event.target.value)} />
                                </div>
                                {campos.map((campo, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            value={campo.nombre}
                                            onChange={(e) => handleChange(e.target.value, index, 'nombre')}
                                            placeholder="Nombre del campo"
                                        />
                                        <input
                                            type="text"
                                            value={campo.valor}
                                            onChange={(e) => handleChange(e.target.value, index, 'valor')}
                                            placeholder="Valor del campo"
                                        />
                                    </div>
                                ))}

                            </form>
                            <NavLink type="" value="Cancelar" className="btn btn-cancel" to="/misMascotas" >Cancelar</NavLink>
                            <button className="btn btn-success agregar" type="button" onClick={agregarCampo}>Agregar campo</button>
                            <button className="btn btn-success guardar" type="button" onClick={guardarDatos}>Guardar</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );


}

export default FormRegistrarMascota;