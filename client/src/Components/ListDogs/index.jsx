import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllRazas } from '../../Redux/Action';
import Paginado from '../Paginado';
import Dogs from '../Dogs';
import style from "./ListDogs.module.css";
export default function ListDogs({ filterRazas }) {

  const [paginaactual, setPaginaActual] = useState(1);
  const [postporpag] = useState(8);


  const indexDelUltimoPost = paginaactual * postporpag;
  const indexDelPrimerPost = indexDelUltimoPost - postporpag;
  const postActual = filterRazas.slice(indexDelPrimerPost, indexDelUltimoPost);

  const paginado = NumeroPagina => setPaginaActual(NumeroPagina);
  const filterRazas3 = useSelector(state => state.filterRazas3)
  useEffect(() => {
    setPaginaActual(1);
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
          <Paginado
            postporpag={postporpag}
            totalRazas={filterRazas.length}
            paginado={paginado}
            paginaActual={paginaactual}
          />
      </div>

    )
  }
}

