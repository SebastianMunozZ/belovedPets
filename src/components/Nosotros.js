import React, { Component } from "react";
import nosotros from '../assets/images/nosotros.png';
import NuestrosVets from './NuestrosVets';
import AdminHoras from './AdminHoras';

class Nosotros extends Component {

    render() {
        return (
            <div>
                <div className="center">
                    <section>
                        <img src={nosotros} className="nosotros" alt="Logotipo" />
                    </section>
                    <div className="nosotrosTitulo">
                        <h2>Nosotros</h2>
                        <div className="nosotrosTexto">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Reiciendis, beatae velit suscipit vero exercitationem, nobis incidunt, molestias praesentium quod hic fuga.
                            Laborum ad non sequi? Assumenda dolores eaque temporibus quo?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <section>
                        <NuestrosVets />
                        <AdminHoras />
                    </section>

                </div>

            </div>
        );
    }
}

export default Nosotros;