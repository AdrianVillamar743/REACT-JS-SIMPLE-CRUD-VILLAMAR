import axios from 'axios'
import { useState,useEffect } from 'react'

import {useNavigate,useParams } from "react-router-dom";

const servidor='http://localhost:8000/categorias/'
  
  const ComponenteEditarCategoria=()=>{
      const[nombre,setNombre]=useState('')
      const navigate=useNavigate()
       
      const {id}=useParams()

      const actualizar =async (e)=>{
          e.preventDefault()
          await axios.put (servidor+id,{
              nombre:nombre
          })
          navigate('/')
      }

     useEffect(()=>{
                getCategoriaById()
     },[])


     const getCategoriaById=async()=>{
         const res=await axios.get(servidor+id)
         setNombre(res.data.nombre)
     }


        return (
              
            <div className='container'>
            <div>Actualizar categoria</div>
              <form onSubmit={actualizar}> 
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

  

  export default ComponenteEditarCategoria