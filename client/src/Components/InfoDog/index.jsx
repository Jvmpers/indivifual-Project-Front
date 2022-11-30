import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearDetailRaza, getDetailRaza } from "../../Redux/Action";
import style from "./InfoDog.module.css";
export default function InfoDog(props) {
  /* const [detail,setDetail]= useState("") */
  const detailRaza = useSelector((state) => state.DetailRaza);
  const id = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailRaza(id));
    console.log(detailRaza);
    return () => {
      dispatch(clearDetailRaza());
    };
  }, []);
  if (detailRaza.length === 0) {
    return (
      <div className={style.conteiner}>
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <div className={style.conteiner}>
        {console.log(detailRaza.Imagen)}
        <div className={style.divImage}>
          <img
            className={style.img}
            src={
              detailRaza.Imagen
                ? detailRaza.Imagen
                : "https://static.vecteezy.com/system/resources/thumbnails/006/720/668/small/dog-face-logo-free-vector.jpg"
            }
            alt="imagen de raza"
          />
        </div>
        <div className={style.divTitle}>
          <p className={style.title}>{detailRaza.Nombre} </p>
        </div>
        <div className={style.description}>
        <div className={style.subDescription}>
          <p className={style.datode}>Weight:</p>
          <p className={style.numero}>{detailRaza.Peso.Min}</p>
          <p className={style.a}>a</p>
          <p className={style.numero}>{detailRaza.Peso.Max}</p>
          <p className={style.a}>Kg</p>
        </div>
        <div className={style.subDescription}>
          <p className={style.datode}>Altura:</p>
          <p className={style.numero}>{detailRaza.Altura.Min}</p>
          <p className={style.a}>a</p>
          <p className={style.numero}>{detailRaza.Altura.Max}</p>
          <p className={style.a}>Cm</p>
        </div>
        <div className={style.subDescription}>
          <p className={style.datode}>Life expectancy:</p>
          <p className={style.numero}>{detailRaza.Años_de_vida.Min}</p>
          <p className={style.a}>a</p>
          <p className={style.numero}>{detailRaza.Años_de_vida.Max}</p>
          <p className={style.a}>Años</p>
        </div>
        <div className={style.subDescription}>
          <p className={style.datode}>Temperaments:</p>
          <div>
            {detailRaza.Temperamento.length ? (
              detailRaza.Temperamento.map((e) => {
                return (
                  <p key={e.Nombre} className={style.temperamentos}>
                    {e.Nombre}
                  </p>
                );
              })
            ) : (
              <p className={style.datode}>Sin Temperamentos</p>
            )}{" "}
          </div>
                    
        </div>
        </div>
      </div>
    );
  }
}
