import React from 'react'
import style from "./landing.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../SearchBar';
export default function Landing() {
  return (
    <>
    <div className={style.containerLanding}>
    <nav className={style.navLanding}>
      <div>
       </div>
       <div className={style.searchDivNav}>
    </div>
    <div className={style.optionsNav}>
      <Link className={style.linkNav} to="/dogs" >Home</Link> 
      <Link className={style.linkNav} to="/dogs/create" >Create</Link>   
      </div>
  </nav>
    <div className={style.background}>
  </div>

    </div>
   

    </>
  )
}
