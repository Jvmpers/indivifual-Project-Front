import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {filterEqualAllRazas, getAllTemperaments, orderRazas } from '../../Redux/Action';
import style from "./orden.module.css";
export default function Orden() {
const [orden, setOrden] = useState("default")

const temperaments = useSelector(state=>state.temperaments) ;
const filterRazas2= useSelector(state=>state.filterRazas2)
const dispatch = useDispatch()


useEffect(()=>{
  dispatch(filterEqualAllRazas([]))
  dispatch(orderRazas(filterRazas2,orden))}
,[dispatch,filterRazas2,orden])

if(temperaments.length===0){
        
  return <h1>Cargando...</h1>
}   else {
  return (
    <div>
        <select className={style.selectO} defaultValue="default" name="orden" id="orden" onChange={(e) => setOrden(e.target.value)} >
          <option value="default">Default</option>
          <optgroup label="Alfabetico"></optgroup>
          <option value="0">ascendente</option>
          <option value="1">descendente</option>
          <optgroup label="Peso" ></optgroup>
          <option value="2">Mayor</option>
          <option value="3">Menor</option>
        </select>
    </div>


  )
}
}
