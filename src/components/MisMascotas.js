import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import NuestrosVets from './NuestrosVets';
import AdminHoras from './AdminHoras';

function MisMascotas() {
    let datos = JSON.parse(sessionStorage.getItem('datos'));
    let pet = JSON.parse(sessionStorage.getItem('pet'));
    const mismascotas = (e) => {
        e.preventDefault();
        window.location.href = '/formRegistrarMascota';
    }

    const [isOpen, setIsOpen] = useState(false);
    const [modalUser, setModalUser] = useState(false);

    const openModalUser = (e) => {
        e.preventDefault();
        setModalUser(true);
    };

    const closeModalUser = (e) => {
        e.preventDefault();
        setModalUser(false);
    };

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const goToUpdateUser = (e) => {
        e.preventDefault();
        window.location.href = '/formUpdateUser';
    }
    return (
        <div>
            <section>
                <div id="formulario">
                    <div className="center">
                        <div id="form">
                            <h2 className="subheader">Mascotas registradas</h2>

                            <form className="mid-form" >
                                <div className="clearfix"></div>
                                {Object.keys(datos).length > 0 ?
                                    <div className="rectangulo">
                                        <div className="info">
                                            <ul>
                                                <li key={datos.nombre}>
                                                    <strong>Nombre:</strong> {datos.nombre}
                                                </li>
                                            </ul>
                                        </div>
                                        <button onClick={goToUpdateUser}>Actualizar</button>
                                        <button onClick={openModalUser}>Ver registro de usuario</button>
                                        <button onClick={openModal}>Ver registro de veterinario</button>
                                    </div> : <div></div>}

                                <input type="submit" value="Registrar Mascota" className="btn btn-success" onClick={mismascotas} />
                            </form>

                        </div>

                    </div>
                </div>
            </section>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Ficha médica</h2>
                        <h4>Nombre de mascota: {pet.nombre}</h4>
                        <h4>Edad: {pet.edad}</h4>
                        <h4>Enfermedades: {pet.enf}</h4>
                        <h4>Vacunas: {pet.vac}</h4>
                        <h4>Medicamentos: {pet.med}</h4>
                        <h4>Nombre del dueño: {pet.nomDu}</h4>
                        <h4>Información adicional: {pet.info}</h4>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
            {modalUser && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Información de mascota</h2>
                        <ul>
                            {Object.entries(datos).map(([clave, valor]) => (
                                <li key={clave}>
                                    <strong>{clave}:</strong> {valor}
                                </li>
                            ))}
                        </ul>
                        <button onClick={closeModalUser}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );

}

export default MisMascotas;