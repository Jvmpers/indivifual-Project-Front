import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterRealOrCreateRazas, getAllRazas} from '../../Redux/Action';
import style from "./filterc.module.css";
export default function FilterC() {
const [filtroC, setFiltroC] = useState("Default")
const allRazas= useSelector(state=>state.allRazas)
const dispatch = useDispatch()
const buscador = useSelector(state=>state.buscador)

useEffect(()=>{
/*   dispatch(getAllRazas()) */

  dispatch(filterRealOrCreateRazas(allRazas,filtroC))
  
},[dispatch,filtroC])

/* useEffect(()=>{
  if (buscador) {
    dispatch(filterRealOrCreateRazas(buscador,filtroC))
  }
   
  },[buscador])  */
  return (
    <>
       <select className={style.selectC} defaultValue="default" name="filtroC" id="filtroC" onChange={(e) => setFiltroC(e.target.value)}>
          <option value="default">Todos</option>
          <option value="number">Reales</option>
          <option value="string">Creados</option>
        </select>
    </>
  )
}

