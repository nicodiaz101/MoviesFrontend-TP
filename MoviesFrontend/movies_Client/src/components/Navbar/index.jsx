import React, { useEffect, useState } from "react";
import { Header, Nav, Menu } from "./styles";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // Estado de login
    const navigate = useNavigate();

    // Revisa el estado de autenticación al cargar el componente
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userId"));
        if (user) {
            setLoggedIn(true); // Si hay un usuario, se marca como logueado
            console.log('Token:', localStorage.getItem("token"));
            console.log("Role:", localStorage.getItem("userRole"));
            console.log('Usuario logeado: ',localStorage.getItem("userId"));
            console.log("Email del Usuario:", localStorage.getItem("email"));
            console.log("Carrito:", localStorage.getItem("cart"));
        }
    }, []);

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remueve el token
        localStorage.removeItem("userRole"); // Remueve datos del usuario
        localStorage.removeItem("userId"); // Remueve datos del usuario
        localStorage.removeItem("email"); // Remueve email del usuario
        localStorage.removeItem("cart"); // Remueve el carrito
        setLoggedIn(false); // Actualiza el estado
        navigate("/login"); // Redirige al login
    };

    return (
        <Header>
            <Nav>
                <div className="logo">
                    <Link to="/"><img src="./src/Img/cinelogo.png" alt="logo" /></Link>
                </div>
                <div className="menu-links">
                    <Menu open={open}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/buscar">Buscar</Link>
                        </li>                        
                        <li>
                            <Link to="/carrito"><FaShoppingCart /></Link>
                        </li>
                    </Menu>
                </div>
                <div className="btn">
                    {loggedIn ? (
                        <button onClick={handleLogout}>
                            Cerrar Sesión
                        </button>
                    ) : (
                        <Link to="/login">
                            <button>
                                Iniciar Sesión
                            </button>
                        </Link>
                    )}
                    <div className="btn-admin">
                        {loggedIn && localStorage.getItem("userRole") == "ADMIN" ? (
                        <Link to="/adminPage">
                            <button>
                                Pantalla de Administrador
                            </button>
                        </Link>
                        ) : null}
                    </div>
                </div>
                <div className="icon-menu">
                    {
                        open ? 
                        <IoClose
                        size="30" 
                        onClick={() => setOpen(!open)}/>
                        : <IoMenu 
                        onClick={() => setOpen(!open)}
                        size="30"></IoMenu>
                    }
                </div>
            </Nav>
        </Header>
    )
}