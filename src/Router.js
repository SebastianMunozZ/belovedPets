import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NuestrosVets from './components/NuestrosVets';

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                {/* CONFIGURAR RUTAS Y PÁGINAS */}
                <Routes>
                    <Route path="/nuestros-vets" element={<NuestrosVets/>} />

                </Routes>

            </BrowserRouter>
        );
    }
}

export default Router;