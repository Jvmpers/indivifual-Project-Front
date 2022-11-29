import React from 'react'
import style from "./Pages.module.css";
export default function Pages({ postPerPage, allDogs, pages, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.ulP} >
        <div className={style.divP} >
          <li>
            <button className={style.botonP} onClick={() => pages(currentPage===1?currentPage:currentPage-1)} >‹</button>
          </li>
          {pageNumbers.map(number =>{ if(number!==currentPage){ return (
            <li key={number} >
              <button className={style.botonP} onClick={() => pages(number)}  >
                {number}
              </button>
            </li>
          )}else{
            return(
              <li key={number} >
              <button className={style.botonA} onClick={() => pages(number)}  >
                {number}
              </button>
            </li>
            )
          }
          })}
          <li>
            <button className={style.botonP} onClick={() => pages(pageNumbers.length===currentPage?currentPage:currentPage+1)}  >›</button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
