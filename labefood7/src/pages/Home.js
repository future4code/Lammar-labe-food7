import React from "react";
import { useNavigate } from "react-router-dom";
// import URL_GET from "../components/URL_GET";
// import useRequestData from "../hooks/UseRequestData";
// import { useState } from "react";
// import axios from "axios";


const Home = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/Login')
    }
    return(
        <>
        <p>Olá mundo</p>
        <button onClick={goToLogin}>Login</button>
        </>
    )
}

export default Home