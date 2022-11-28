import React from 'react'
import { Link } from 'react-router-dom'
import style from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../SearchBar';
export default function Nav() {
  return (
    <>
    <nav className={style.containerNav}>
      <div>
        <div className={style.turnBackNav}>
        <Link className={style.arrowNav} to="/" ><FontAwesomeIcon  icon={faArrowLeft} /></Link>    
        </div>
       </div>
       <div className={style.searchDivNav}>
      <SearchBar/>
    </div>
      <div className={style.optionsNav}>
      <Link className={style.linkNav} to="/perros" >Home</Link> 
      <Link className={style.linkNav} to="/perros/crear" >Create</Link>   
      </div>
  </nav>
  <div className={style.background}>
  </div>
  </>
  )
}

/*       <ul  className={style.ulnav}>
            <li className={style.ilnav}>
            <Link className={style.Link} to="/perros" >Home</Link>  
            </li>
            <li className={style.ilnav}>
            <Link className={style.Link} to="/perros/crear" >Creación</Link>  
            </li>
            <li className={style.ilnav}>
             <Link className={style.Link} to="/" >Salir»</Link>    
             </li>
        </ul> */