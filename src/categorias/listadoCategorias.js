import axios from 'axios'
import { useState,useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const servidor='http://localhost:8000/categorias/'

const ComponenteMostrarCategorias=()=>{
      /*categorias valor de estado, setCategoria para actualizar */
     const[categorias,setCategoria]=useState([])
     useEffect( ()=>{
         getCategorias()
     },[])

     const getCategorias =async ()=>{
        /*Peticion al servidor */
       const res=await axios.get(servidor) 
       setCategoria(res.data) 
    }

     
    const deleteCategoria=async (id)=>{
      await  axios.delete(`${servidor}${id}`)
        getCategorias()
    }

    

      return (
       
         <div className='container'>
    <div> <Link to="/crear"  className='btn btn-primary'><i className="fa-solid fa-plus"></i> </Link></div>  
             <div className='row'>
                 <div className='col'>
                 <table className="table table-sm">
                   <thead>
                     <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Creado</th>
                      <th scope="col">Modificado</th>
                      <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                       <tbody>
                          {categorias.map ( (categoria) => (
                             <tr key={categoria.id}>
                               <td> {categoria.id}</td>
                              <td> {categoria.nombre}</td>
                              <td>{categoria.createdAt}</td>
                              <td>{categoria.updatedAt}</td>
                              <td>
                                    <Link to={`/editar/${categoria.id}`}className="btn btn-info"><i className="fas fa-edit"></i></Link>
                                  <button onClick={()=>deleteCategoria(categoria.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                              </td>

                             </tr>
                           ))}
    
   
    
                    </tbody>
               </table>
                 </div>
             </div>


























         </div>   



        
      )




}


export default ComponenteMostrarCategorias;