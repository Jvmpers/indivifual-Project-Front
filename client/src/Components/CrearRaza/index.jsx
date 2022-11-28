import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createRaza, getAllTemperaments } from '../../Redux/Action';
import style from "./crearraza.module.css";
export default function CrearRaza() {
    const [input, setInput] = useState({
        Nombre: "",
        PesoMin: 0,
        PesoMax: 0,
        AlturaMin: 0,
        AlturaMax: 0,
        Años_de_vidaMin: 0,
        Años_de_vidaMax: 0,
        Imagen: "",
    });
    const [temp, setTemp] = useState([])
    const [succes, setSucces] = useState("")
    const [error, setError] = useState({
        Nombre: "",
        PesoMin: "",
        PesoMax: "",
        AlturaMin: "",
        AlturaMax: "",
        Años_de_vidaMin: "",
        Años_de_vidaMax: "",
        Imagen:"",
    })
    const temperaments = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTemperaments());
        return console.log("hola soy el final")
    }, []);

    const errores = (e) => {
        let error = {}
        /* Validacion Nombre */
        if (!e.Nombre) error.Nombre = "El nombre tiene que tener por lo menos una letra";
        else if (!/^[A-Z]+$/i.test(e.Nombre)) error.Nombre = "El nombre solo puede contener letras";
        else if (e.Nombre.length>20)error.Nombre = "El nombre debe tener menos de 21 caracteres"
       /* Validacion Peso Min */
        if (!/^\d+$/.test(e.PesoMin)||!e.PesoMin || e.PesoMin <= 0) error.PesoMin = "debe tener un digito valido y mayor a 0";
        else if(e.PesoMin>199)error.PesoMin="debe ser un numero inferior a 200";
        /* Validacion Altura Min */
        if (!/^\d+$/.test(e.AlturaMin)||!e.AlturaMin || e.AlturaMin <= 0) error.AlturaMin = "debe tener un digito valido y mayor a 0";
        else if(e.AlturaMin>199)error.AlturaMin="debe ser un numero inferior a 200";
        /* Validacion Años Min */
        if (!/^\d+$/.test(e.Años_de_vidaMin)||!e.Años_de_vidaMin || e.Años_de_vidaMin <= 0) error.Años_de_vidaMin = "debe tener un digito valido y mayor 0";
        else if(e.Años_de_vidaMin>99)error.Años_de_vidaMin="debe ser un numero inferior a 100";
        /* Validacion Peso Max */
        if (!/^\d+$/.test(e.PesoMax)||!e.PesoMax)error.PesoMax = "debe ser un digito valido";
        else if(e.PesoMax>200)error.PesoMax="debe ser un numero inferior a 201";
        else if(parseInt(e.PesoMax)<=parseInt(e.PesoMin))error.PesoMax = "debe ser mayor al primero";
        /* Validacion Altura Max */
        if (!/^\d+$/.test(e.AlturaMax)||!e.AlturaMax)error.AlturaMax = "debe ser un digito valido y mayor al minimo";
        else if(e.AlturaMax>200)error.AlturaMax="debe ser un numero inferior a 201";
        else if(parseInt(e.AlturaMax)<=parseInt(e.AlturaMin))error.AlturaMax = "debe ser mayor al primero";
        /* Validacion Años Max */
        if (!/^\d+$/.test(e.Años_de_vidaMax)||!e.Años_de_vidaMax )error.Años_de_vidaMax = "debe ser un digito valido y mayor al minimo";
        else if(e.Años_de_vidaMax>100)error.Años_de_vidaMax="debe ser un numero inferior a 101";
        else if(parseInt(e.Años_de_vidaMax)<=parseInt(e.Años_de_vidaMin))error.Años_de_vidaMax = "debe ser mayor al primero";
        /* Validacion Imagen */
        if(!/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(e.Imagen))error.Imagen = "url no valida";
        else if(!/.*(png|jpg|jpeg|gif)$/.test(e.Imagen))error.Imagen = "la url debe ser una imagen";
        if(!e.Imagen)delete error.Imagen;
        return error
    }

    const handleChange = (e) => {

        setInput(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setTemp(prev => !prev.includes(e.target.value)?[...prev,e.target.value]:[...prev]);
    };

    const eliminarTemp = (e) => {
        let nuevo = temp.filter(a => a !== e)
        setTemp(nuevo);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setSucces("")
         setError(errores(input))
        const errors = errores(input);  
        console.log(errors)
         console.log( Object.keys(errors).length)
        console.log( Object.values(error).length)

        if (Object.keys(errors).length === 0) {
            dispatch(createRaza(input, temp))
            setInput({
                Nombre: "",
                PesoMin: 0,
                PesoMax: 0,
                AlturaMin: 0,
                AlturaMax: 0,
                Años_de_vidaMin: 0,
                Años_de_vidaMax: 0,
                Imagen: "",
            })
            setTemp([]);
            setSucces("Creado con Exito")
        }
    }
 
    return (
        <div className={style.conteiner} >
            <div className={style.divs} >
                <label className={style.to}>Nombre: </label>
                <input className={style.inputs} type={"text"} name={"Nombre"} value={input.Nombre} onChange={(e) => handleChange(e)} />
                {error.Nombre && <p className={style.error}>{error.Nombre}</p>}
            </div>
            <div className={style.divserror} >

            </div>
            <div className={style.divs} >
                <label className={style.to}>Peso: </label>
                <input className={style.inputs} type={"number"} name={"PesoMin"} value={input.PesoMin} onChange={(e) => handleChange(e)} min="1" max="200"/>
                {error.PesoMin && <p className={style.error}>{error.PesoMin}</p>}
                <p className={style.to} >to</p>
                <input className={style.inputs} type={"number"} name={"PesoMax"} value={input.PesoMax} onChange={(e) => handleChange(e)} min="1" max="200"/>
                {error.PesoMax && <p className={style.error}>{error.PesoMax}</p>}
                <p className={style.to} >Kg</p>
            </div>
            <div className={style.divserror} >

            </div>
            <div className={style.divs} >
                <label className={style.to}>Altura: </label>
                <input className={style.inputs} type={"number"} name={"AlturaMin"} value={input.AlturaMin} onChange={(e) => handleChange(e)} min="1" max="200"/>
                {error.AlturaMin && <p className={style.error}>{error.AlturaMin}</p>}
                <p className={style.to} >to</p>
                <input className={style.inputs} type={"number"} name={"AlturaMax"} value={input.AlturaMax} onChange={(e) => handleChange(e)} min="1" max="200"/>
                {error.AlturaMax && <p className={style.error}>{error.AlturaMax}</p>}
                <p className={style.to} >Cm</p>
            </div>
            <div className={style.divs} >
                <label className={style.to}>Esperanza de Vida: </label>
                <input className={style.inputs} type={"number"} name={"Años_de_vidaMin"} value={input.Años_de_vidaMin} onChange={(e) => handleChange(e)}  min="1" max="100" />
                {error.Años_de_vidaMin && <p className={style.error}>{error.Años_de_vidaMin}</p>}
                <p className={style.to} >to</p>
                <input className={style.inputs} type={"number"} name={"Años_de_vidaMax"} value={input.Años_de_vidaMax} onChange={(e) => handleChange(e)}  min="1" max="100" />
                {error.Años_de_vidaMax && <p className={style.error}>{error.Años_de_vidaMax}</p>}
                <p className={style.to} >Años</p>
            </div>
            <div className={style.divs} >
                <label className={style.to}>Imagen, poner link (opcional): </label>
                <input className={style.inputs} type={"text"} name={"Imagen"} value={input.Imagen} onChange={(e) => handleChange(e)}   />
                {error.Imagen && <p className={style.error}>{error.Imagen}</p>}
            </div>
            <div>

                <select className={style.selects} defaultValue="default" name="temp" id="filtroT" onChange={(e) => handleClick(e)}>
                    {temperaments.map(e => {
                        return (
                            <option key={e.id} value={e.Nombre}>{e.Nombre}</option>
                        )
                    })}
                </select>
                {temp.map((e, i) => {
                    if(e){
                        return (
                            <div key={i}>
                                <span className={style.temperamentos} >{e} </span>
                                <button className={style.eliminar} onClick={() => eliminarTemp(e)}>x</button>
                            </div>
                        )
                    }

                })}
                {/*    <button onClick={(e) =>(<div> <p> {console.log("a")} hola</p></div> )}>Agregar</button> */}
            </div>
            <div>
                <button className={style.buttons} type={"submit"} onClick={(e) => { handleSubmit(e) }}>Create</button>
            </div>
            <div>
                {succes && <p className={style.succes}>{succes}</p>}
            </div>

        </div>
    );
}
