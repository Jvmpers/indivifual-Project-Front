import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllRazas } from '../../Redux/Action';
import Pages from '../Pages';
import Dogs from '../Dogs';
import style from "./ListDogs.module.css";
export default function ListDogs({ filterRazas }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);


  const indexDelUltimoPost = currentPage * postPerPage;
  const indexDelPrimerPost = indexDelUltimoPost - postPerPage;
  const postActual = filterRazas.slice(indexDelPrimerPost, indexDelUltimoPost);

  const pages = NumeroPagina => setCurrentPage(NumeroPagina);
  const filterRazas3 = useSelector(state => state.filterRazas3)
  useEffect(() => {
    setCurrentPage(1);
  }, [filterRazas3])


  if (postActual.length === 0) {

    return <div className={style.listado}>
      <h1>Cargando...</h1> </div>
  } else {
    return (
      <div className={style.containerList}>
        <div className={style.containerDogs}>
          <Dogs data={postActual} />
        </div>
{/*           <Pages
            postPerPage={postPerPage}
            allDogs={filterRazas.length}
            pages={pages}
            currentPage={currentPage}
          /> */}
      </div>

    )
  }
}

