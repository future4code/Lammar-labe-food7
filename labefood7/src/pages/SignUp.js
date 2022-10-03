import React from "react";
import { useNavigate } from "react-router-dom";
import { Body, ImgLogo } from "../Style/signUp/signUp";
import logo from '../img/login/logo.png'
import { useState } from "react";

const SignUp = () => {
    const navigate = useNavigate()

    const goToBack = () => {
        navigate(-1)
    }


    const [type, setType] = useState('password')

    const [img, setImg] = useState('https://cdn-icons-png.flaticon.com/512/1001/1001008.png')

    const [typeTwo, setTypeTwo] = useState('password')

    const [imgTwo, setImgTwo] = useState('https://cdn-icons-png.flaticon.com/512/1001/1001008.png')

    function Visualizar () {
        if(type === 'password'){
            setType('text')
            setImg('https://cdn-icons-png.flaticon.com/512/1000/1000966.png')
        }else{
            setType('password')
            setImg('https://cdn-icons-png.flaticon.com/512/1001/1001008.png')
        }
    }

    function VisualizarTwo () {
        if(typeTwo === 'password'){
            setTypeTwo('text')
            setImgTwo('https://cdn-icons-png.flaticon.com/512/1000/1000966.png')
        }else{
            setTypeTwo('password')
            setImgTwo('https://cdn-icons-png.flaticon.com/512/1001/1001008.png')
        }
    }


    return (
        <Body>
        <ImgLogo src={logo} alt='logo'></ImgLogo>
        <div className="title"><h2>Cadastrar</h2></div>

        <form>
        <div className="Input">
            <input type='name' name='name' required  placeholder='Digite seu nome'/>   
        </div>

        <div className="Input">
            <input type='email' name='email' required  placeholder='Digite seu email'/>   
        </div>

        <div className="Input">
            <input type='text' name='CPF' required  placeholder='Digite seu CPF'/>   
        </div>

        <div className="Input">
            <input type={type} name='senha' required  placeholder='Digite sua senha'/>

            <button onClick={Visualizar}><img src={img}/></button>    
        </div>

        <div className="Input">
            <input type={typeTwo} name='senha' required  placeholder='Confirme sua senha'/>

            <button onClick={VisualizarTwo}><img src={imgTwo}/></button>    
        </div>
        </form>

        <button className="entrar">Cadastrar</button>


        <button onClick={goToBack}>Voltar</button>
        </Body>
    )
}

export default SignUp