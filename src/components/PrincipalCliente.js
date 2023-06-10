import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import NuestrosVets from './NuestrosVets';
import AdminHoras from './AdminHoras';

function PrincipalCliente() {

    const mismascotas = (e) => {
        e.preventDefault();
        window.location.href = '/misMascotas';
    }
    return (
        <div>
            <section>
                <div className="button-container-mascotas">
                    <button className="my-button-mascotas" onClick={mismascotas}>Mis mascotas</button>
                </div>
                <div className='center'>
                    <section>
                        <NuestrosVets />
                        <AdminHoras />
                    </section>

                </div>
            </section>

        </div>
    );

}

export default PrincipalCliente;