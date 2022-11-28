import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRazas, getAllTemperaments } from '../../Redux/Action';
import FilterC from '../FilterC';
import FilterT from '../FilterT';
import ListDogs from '../ListDogs';
import Orden from '../Orden';
import style from "./home.module.css";
export default function Home() {
  const filterRazas3 = useSelector(state=>state.filterRazas3)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllRazas());
    dispatch(getAllTemperaments());

},[]);
  
  return (
    <section className={style.containerHome}>
    
    <div className={style.divFilters} >
    <label className={style.filters} >Order:</label>
    <Orden/>
    <label className={style.filters} >Api/Created:</label>
    <FilterC/>
    <label className={style.filters} >Temperaments:</label>
    <FilterT/>
    </div> 
     <div key={8932}><ListDogs filterRazas={filterRazas3} /></div> 
     </section>
  )
}
