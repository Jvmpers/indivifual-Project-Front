import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import style from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../SearchBar';
export default function Nav() {
  const history = useHistory();
  return (
    <>
    <nav className={style.containerNav}>
      <div>
        <div className={style.turnBackNav}>
        <div    onClick={history.goBack}    className={style.arrowNav} ><FontAwesomeIcon  icon={faArrowLeft} /></div>    
        </div>
       </div>
       <div className={style.searchDivNav}>
      <SearchBar/>
    </div>
      <div className={style.optionsNav}>
      <Link className={style.linkNav} to="/dogs" >Home</Link> 
      <Link className={style.linkNav} to="/dogs/create" >Create</Link>   
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