import React, { Component, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function FormUpdateUser() {

    let datos = JSON.parse(sessionStorage.getItem('datos'));
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
        window.location.href = '/misMascotas';
    }

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
        <div id="formulario">
            <div className="center">
                <div id="form">
                    <h1 className="subheader">Modificar información de mascota</h1>

                    <form className="mid-form" onSubmit={recibirFormulario}>
                        {Object.entries(datos).map(([clave, valor]) => (

                            <div className="form-group">
                                <label htmlFor="nombre">{clave}</label>
                                <input type="text" name="nombre" value={valor} />
                            </div>
                        ))}
                        

                        <div className="clearfix"></div>

                        <div>
                            <NavLink type="" value="Cancelar" className="btn btn-cancel" to="/misMascotas">Cancelar</NavLink>
                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );

}

export default FormUpdateUser;