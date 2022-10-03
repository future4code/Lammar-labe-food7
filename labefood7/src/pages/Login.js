import React from "react";
import { useNavigate } from "react-router-dom";
import { Body, ImgLogo } from "../Style/loginStyle/loginStyle";
import logo from '../img/login/logo.png'
import { useState } from "react";

// import URL_GET from "../components/URL_GET";
// import useRequestData from "../hooks/UseRequestData";
// import { useState } from "react";
// import axios from "axios";

const Login = () => {
    const navigate = useNavigate()

    const goToBack = () => {
        navigate(-1)
    }

    const goToSingUp = () => {
        navigate('/SignUp')
    }

    const [type, setType] = useState('password')

    const [img, setImg] = useState('https://cdn-icons-png.flaticon.com/512/1001/1001008.png')

    function Visualizar () {
        if(type === 'password'){
            setType('text')
            setImg('https://cdn-icons-png.flaticon.com/512/1000/1000966.png')
        }else{
            setType('password')
            setImg('https://cdn-icons-png.flaticon.com/512/1001/1001008.png')
        }
    }


    return(
        <Body>
        <ImgLogo src={logo} alt='logo'></ImgLogo>
        <div className="title"><h2>Entrar</h2></div>

        <div className="Input">
            <input type='email' name='email' required  placeholder='Digite seu email'/>   
        </div>

        <div className="Input">
            <input type={type} name='senha' required  placeholder='Digite sua senha'/>

            <button onClick={Visualizar}><img src={img}/></button>    
        </div>


        <button className="entrar">Entrar</button>

        <span onClick={goToSingUp}>
        Não possui cadastro? Clique aqui.
        </span>

        <button onClick={goToBack}>Voltar</button>
        </Body>
    )
}

export default Login