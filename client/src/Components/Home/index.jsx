import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRazas, getAllTemperaments } from '../../Redux/Action';
import FilterC from '../FilterC';
import FilterT from '../FilterT';
import ListDogs from '../ListDogs';
import Orden from '../Orden';
import SearchBar from '../SearchBar';
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
       <div className={style.searchDivNav}>
      <SearchBar/>
    </div>
    <div className={style.divFilters} >
      <div className={style.filterSection}>    
      <label className={style.smallFilters} >Order</label>
      <label className={style.filters} >Order:</label>
    <Orden/>
   </div>
   <div className={style.filterSection} >
   <label className={style.smallFilters} >Api/Created</label>
   <label className={style.filters} >Api/Created:</label>
    <FilterC/>
   
   </div>
    <div className={style.filterSection}>
    <label className={style.smallFilters} >Temperaments</label>
 <label className={style.filters} >Temperaments:</label>
    <FilterT/>
    
    </div>
  </div> 
     <div key={8932}><ListDogs filterRazas={filterRazas3} /></div> 
     </section>
  )
}
