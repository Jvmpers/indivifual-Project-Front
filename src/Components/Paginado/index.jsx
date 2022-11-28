import React from 'react'
import style from "./paginado.module.css";
export default function Paginado({ postporpag, totalRazas, paginado, paginaActual }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRazas / postporpag); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.ulP} >
        <div className={style.divP} >
          <li>
            <button className={style.botonP} onClick={() => paginado(paginaActual===1?paginaActual:paginaActual-1)} >‹</button>
          </li>
          {pageNumbers.map(number =>{ if(number!==paginaActual){ return (
            <li key={number} >
              <button className={style.botonP} onClick={() => paginado(number)}  >
                {number}
              </button>
            </li>
          )}else{
            return(
              <li key={number} >
              <button className={style.botonA} onClick={() => paginado(number)}  >
                {number}
              </button>
            </li>
            )
          }
          })}
          <li>
            <button className={style.botonP} onClick={() => paginado(pageNumbers.length===paginaActual?paginaActual:paginaActual+1)}  >›</button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
