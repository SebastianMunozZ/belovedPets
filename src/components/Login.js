import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
    const [users, setUsers] = useState([]);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    let correoUser = sessionStorage.getItem('correo');
    let contraseñaUser = sessionStorage.getItem('contraseña');
    let vet = JSON.parse(sessionStorage.getItem('veterinario'));

    const recibirFormulario = (e) => {
        e.preventDefault();

        const user = {
            correo: correo,
            contraseña: pass
        }

        if (user.contraseña == contraseñaUser && user.correo == correoUser) {
            sessionStorage.setItem('logged', true);
            sessionStorage.setItem('isVet', false);
            alert("inicio de sesión exitoso");
            window.location.href = '/';
        } else if (user.contraseña == vet.contraseña && user.correo == vet.correo){
            sessionStorage.setItem('logged', true);
            sessionStorage.setItem('isVet', true);
            alert("Bienvenido Dr.");
            window.location.href = '/';
        } else {
            alert("Correo o contraseña incorrectos, intenta de nuevo");
        }

    }

    return (
        <div id="formulario">
            <div className="center">
                <div id="form">
                    <h1 className="subheader">Iniciar sesión</h1>

                    <form className="mid-form" onSubmit={recibirFormulario}>
                        <div className="form-group">
                            <label htmlFor="correo">Correo electrónico (*)</label>
                            <input type="text" name="correo" onChange={(event) => setCorreo(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pass">Contraseña (*)</label>
                            <input type="text" name="pass" onChange={(event) => setPass(event.target.value)} />
                        </div>

                        <h4 className="dato-obligatorio">(*) Los datos marcados son obligatorios</h4>

                        <div className="clearfix"></div>

                        <div>
                            <NavLink type="" value="Cancelar" className="btn btn-cancel" to="/">Cancelar</NavLink>
                            <input type="submit" value="Iniciar sesión" className="btn btn-success" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );

}

export default Login;