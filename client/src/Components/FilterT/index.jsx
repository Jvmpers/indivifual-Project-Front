import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {filterTemperament} from '../../Redux/Action';
import style from "./filtert.module.css";
export default function FilterT() {
const [filtroT, setFiltroT] = useState("default")

const temperaments = useSelector(state=>state.temperaments) ;
const filterRazas1= useSelector(state=>state.filterRazas1)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(filterTemperament(filterRazas1,filtroT))
},[dispatch,filterRazas1,filtroT])

if(temperaments.length===0){
        
  return <h1>Cargando...</h1>
}   else {
  return (
    <div>
        <select className={style.selectT} defaultValue="default" name="filtroT" id="filtroT" onChange={(e) => setFiltroT(e.target.value)}>
          <option value="default">Todos</option>
          {temperaments.map(e=>{
            return(
              <option key={e.id} value={e.Nombre}>{e.Nombre}</option>
            )
          })}
        </select> 
    </div>


  )
}
}
