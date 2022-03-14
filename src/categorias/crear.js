import axios from 'axios'
import { useState,useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useNavigate
} from "react-router-dom";
const servidor='http://localhost:8000/categorias/'

const ComponenteCrearCategorias=()=>{
      /*Nombre es tu campo, aunque puedes usar mas constantes de acuerdo
      al numero de campos que tengas */
     const[nombre,setNombre]=useState('')
     const navigate=useNavigate()
     
     const guardarCategoria=async (e)=>{
         e.preventDefault ()
         /*Dentro del array puedes ir aumentando de acuerdo a la cantidad de campos requeridos */
        await axios.post(servidor,{nombre: nombre})
        navigate('/') 
    }

    

      return (
       
         <div className='container'>
             <div>Crear categoria</div>
               <form onSubmit={guardarCategoria}> 
  <div className="form-group row">
    <label htmlFor="nombre" className="col-sm-2 col-form-label">Categoria</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control-plaintext" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Escriba nombre de la categoria"/>
    </div>
  </div>

  <div className="">
     <button type='submit' className='btn btn-primary'><i className="fa-solid fa-floppy-disk"></i></button>
  </div>
</form>
         
         </div>   

        
      )




}


export default ComponenteCrearCategorias;