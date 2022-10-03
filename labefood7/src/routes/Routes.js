import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
        </BrowserRouter>
    )
    
}
export default Router// Pasta em que colocaremos tanto o coordinator, como o arquivo de rotas.