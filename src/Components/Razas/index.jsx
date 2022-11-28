import React from 'react';
import { Link } from 'react-router-dom'
import style from "./razas.module.css";
export default function Razas(props) {

  /*   const { ID, Nombre, Peso, Temperamento, Imagen } = props.data; */


  return (
    <div className={style.listado}>
      <ul className={style.uls}>
        {props.data.map(e => (
          <Link className={style.link} to={`/perros/${e.ID}`}><div className={style.conteiner} >
            <div>
              <div className={style.divs}>
                <img className={style.imagen} src={e.Imagen.length?e.Imagen:"https://static.vecteezy.com/system/resources/thumbnails/006/720/668/small/dog-face-logo-free-vector.jpg"} alt="" />
              </div>
            </div>
            <div>
              <div className={style.divs} >
                <li className={style.lis} key={e.ID}></li>
              </div>

              <div className={style.divs}>
                <p className={style.titulo} to={`/perros/${e.ID}`} >{e.Nombre}</p>
              </div>
              <div className={style.divs}>
                <p className={style.to}  >Peso {e.Peso.Min} to {e.Peso.Max}</p>
              </div>
              <div className={style.divs}>
                {e.Temperamento.map(e => {
                  return (
                    <p key={e.Nombre} className={style.temperamentos} >{e.Nombre}</p>
                  )
                })}
              </div>
            </div>



          </div>
          </Link>

        ))}
      </ul>
    </div>
  )


}

/*       <img width="150px" src={Imagen} alt={`Imagen de ${Nombre}`} />
      <h1>{Nombre}</h1>
      <p>{Peso.Min}</p><p>{Peso.Max}</p>
      {Temperamento.map(e => {
        return (
          <div key={e.Nombre}>
            <p>{e.Nombre}</p>
          </div>
        )
      })}  */