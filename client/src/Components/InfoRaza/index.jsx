import React, { useEffect } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { clearDetailRaza, getDetailRaza } from '../../Redux/Action';
import style from "./inforaza.module.css";
export default function InfoRaza(props) {
/* const [detail,setDetail]= useState("") */
const detailRaza = useSelector(state=>state.DetailRaza);
const id = props.match.params.id;
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDetailRaza(id));
        console.log(detailRaza);
        return ()=>{
            dispatch(clearDetailRaza());
        }
    },[]);
       if(detailRaza.length===0){
        
        return <div  className={style.conteiner} ><h1>Cargando...</h1></div>
    }   else {return (
    <div className={style.conteiner} >
        {console.log(detailRaza.Imagen)}
     <img className={style.img} src={detailRaza.Imagen?detailRaza.Imagen:"https://static.vecteezy.com/system/resources/thumbnails/006/720/668/small/dog-face-logo-free-vector.jpg"} alt='imagen de raza' />
         <p className={style.titulo} >{detailRaza.Nombre} </p>
        <p className={style.datode} >Peso</p>
        <p className={style.numero} >{detailRaza.Peso.Min}</p><p className={style.a} >a</p><p className={style.numero} >{detailRaza.Peso.Max}</p><p className={style.a} >Kg</p>
        <p className={style.datode} >Altura</p>
        <p className={style.numero} >{detailRaza.Altura.Min}</p><p className={style.a} >a</p><p className={style.numero} >{detailRaza.Altura.Max}</p><p className={style.a} >Cm</p>
        <p className={style.datode} >Esperanza de vida</p>
        <p className={style.numero} >{detailRaza.Años_de_vida.Min}</p><p className={style.a} >a</p><p className={style.numero} >{detailRaza.Años_de_vida.Max}</p><p className={style.a} >Años</p>
        <p className={style.datode} >Temperamentos:</p>
        <div >{detailRaza.Temperamento.length?detailRaza.Temperamento.map(e=>{
            return(
                    <p key={e.Nombre} className={style.temperamentos}>{e.Nombre}</p>
            )
        }):(<p className={style.datode} >Sin Temperamentos</p>)} </div>
       
    </div>)}
  
}

