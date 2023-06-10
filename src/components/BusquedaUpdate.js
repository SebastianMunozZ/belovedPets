import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";

function BusquedaUpdate() {

    let pet = JSON.parse(sessionStorage.getItem('pet'));
    const [searchName, setSearchName] = useState('');
    let validSearch
    const [isOpen, setIsOpen] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const openModalDelete = () => {
        setModalDelete(true);
    };

    const closeModalDelete = () => {
        setModalDelete(false);
    };

    const deleteInfo = () => {
        sessionStorage.removeItem("pet");
    }

    const confirmDelete = () => {
        deleteInfo();
        closeModalDelete();
        window.location.href = '/eliminarPaciente';
    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    let busqueda = sessionStorage.getItem('validSearch');


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
            let validSearch = true;
            console.log(validSearch)
        } else {
            let validSearch = false;
            console.log("nooo")
        }

    }

    const goToUpdate = (e) => {
        window.location.href = '/formUpdate';
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
            {busqueda == "true" ?
                <section>
                    <div className="rectangulo">
                        <div className="info">
                            <h3>Nombre de mascota: {pet.nombre}</h3>
                            <h3>Dueño: {pet.nomDu}</h3>
                        </div>
                        <button onClick={goToUpdate}>Actualizar</button>
                        <button onClick={openModal}>Ver más</button>
                        <button onClick={openModalDelete}>Eliminar registro</button>
                    </div>
                </section> : <div></div>}
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Ver información</h2>
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
            {modalDelete && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>¿Estás seguro que deseas eliminar este registro?</h3>
                        <button onClick={closeModalDelete}>No</button>
                        <button onClick={confirmDelete}>Sí</button>
                    </div>
                </div>
            )}
        </div>
    );


}

export default BusquedaUpdate;