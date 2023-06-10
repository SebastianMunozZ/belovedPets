import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

function Registrarse() {

    const [users, setUsers] = useState([]);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

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
                alert("Usuario creado con éxito, ahora puedes iniciar sesión.");
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
                    <h1 className="subheader">Registrarse</h1>

                    <form className="mid-form" onSubmit={recibirFormulario}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre (*)</label>
                            <input type="text" name="nombre" onChange={(event) => setNombre(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="correo">Correo electrónico (*)</label>
                            <input type="text" name="correo" onChange={(event) => setCorreo(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pass">Contraseña (*)</label>
                            <input type="text" name="pass" onChange={(event) => setPass(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pass2">Repita su contraseña (*)</label>
                            <input type="text" name="pass2" onChange={(event) => setPass2(event.target.value)} />
                        </div>

                        <h4 className="dato-obligatorio">(*) Los datos marcados son obligatorios</h4>

                        <div className="clearfix"></div>

                        <div>
                            <NavLink type="" value="Cancelar" className="btn btn-cancel" to="/">Cancelar</NavLink>
                            <input type="submit" value="Crear usuario" className="btn btn-success" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );

}

export default Registrarse;