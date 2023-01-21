import React, { useState } from "react";
import "../hojas-de-estilo/Modal.css";

function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>Bienvenido!</h2>
                <div className="user-content">
                    <div className="user">
                        Usuario
                        <input type="text"/>
                    </div>
                    <div className="password">
                        Contraseña
                        <input type="text"/>
                    </div>
                    <div className="btn-continue"> 
                        <button className="continue">
                            INGRESAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;