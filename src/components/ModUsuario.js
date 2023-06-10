import React, { Component, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ModUsuario() {

    const [users, setUsers] = useState([]);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    useEffect(() => {
        let nombreUser = sessionStorage.getItem('nombre');
        let correoUser = sessionStorage.getItem('correo');
        let contraseñaUser = sessionStorage.getItem('contraseña');

        if (nombreUser && correoUser && contraseñaUser) {
            setNombre(nombreUser);
            setCorreo(correoUser);
            setPass(contraseñaUser);
        }
    }, []);

    const recibirFormulario = (e) => {
        e.preventDefault();

        if (pass == pass2) {

            const user = {
                nombre: nombre,
                correo: correo,
                contraseña: pass
            }
            if (user.nombre.length == 0 || user.correo.length == 0) {
                alert("Ingresa todos los datos obligatorios (*)");
            } else {
                setUsers([...users, user]);
                sessionStorage.setItem('nombre', user.nombre);
                sessionStorage.setItem('correo', user.correo);
                sessionStorage.setItem('contraseña', user.contraseña);
                alert("Usuario modificado con éxito.");
                window.location.href = '/';
                console.log(user);
            }
        } else {
            alert("Las contraseñas deben ser iguales, intenta de nuevo.");
        }
        console.log(users);
    }

    return (
        <div id="formulario">
            <div className="center">
                <div id="form">
                    <h1 className="subheader">Modificar información</h1>

                    <form className="mid-form" onSubmit={recibirFormulario}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre (*)</label>
                            <input type="text" name="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="correo">Correo electrónico (*)</label>
                            <input type="text" name="correo" value={correo} onChange={(event) => setCorreo(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pass">Contraseña (*)</label>
                            <input type="text" name="pass" value={pass} onChange={(event) => setPass(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pass2">Repita su contraseña (*)</label>
                            <input type="text" name="pass2" onChange={(event) => setPass2(event.target.value)} />
                        </div>

                        <h4 className="dato-obligatorio">(*) Los datos marcados son obligatorios</h4>

                        <div className="clearfix"></div>

                        <div>
                            <NavLink type="" value="Cancelar" className="btn btn-cancel" to="/">Cancelar</NavLink>
                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );

}

export default ModUsuario;