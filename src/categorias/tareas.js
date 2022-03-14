import axios from 'axios'
import { useState,useEffect } from 'react'
import{Link} from 'react-router-dom'
const servidor1='http://localhost:8000/tarea/'
const ComponenteMostrarTareas=()=>{
      
    const[tareas,setTarea]=useState([])
    useEffect( ()=>{
        getTareas()
    },[])


    const getTareas =async ()=>{
   
    const res=await axios.get(servidor1) 
    setTarea(res.data) 
 }
 return (
    <div className='container'>
 

 <select name="cars" id="cars">
{tareas.map ( (tarea) => (
     
    <option key={tarea.id}   value= {tarea.id}>{tarea.nombre}</option>
   
                      ))}

</select>
       
                     


</div>
 )

}

export default ComponenteMostrarTareas;