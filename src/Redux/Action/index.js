export const GET_ALL_RAZAS = 'GET_ALL_POSTS';
export const GET_DETAIL_RAZA = 'GET_DETAIL_RAZA';
export const CREATE_RAZA = 'CREATE_RAZA';
export const FILTER_REAL_OR_CREATE_RAZAS = 'FILTER_REAL_OR_CREATE_RAZAS';
export const ORDER_RAZAS = 'ORDER_RAZAS';
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT';
export const FILTER_EQUAL_ALL_RAZAS = 'FILTER_EQUAL_ALL_RAZAS';
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const GET_QUERY = "GET_QUERY";
export const CLEAR_DETAIL_RAZA = "CLEAR_DETAIL_RAZA";
const axios = require("axios");
const order = [
  function compare_NombreAaZ(a, b) {
    if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) {
      return -1;
    }
    if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) {
      return 1;
    }
    return 0;
  },
  function compare_NombreZaA(b, a) {

    if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) {
      return -1;
    }
    if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) {return 1;
    }
    return 0;
  },
  function compare_MaxPeso(b, a) {

    if (Number(a.Peso.Max) < Number(b.Peso.Max)) {
      return -1;
    }
    if (Number(a.Peso.Max) > Number(b.Peso.Max)) {
      return 1;
    }
    return 0;
  },
  function compare_MinPeso(b, a) {

    if (Number(a.Peso.Min) > Number(b.Peso.Min)) {
      return -1;
    }
    if (Number(a.Peso.Min) < Number(b.Peso.Min)) {
      return 1;
    }
    return 0;
  } 
];


export function getAllRazas() {
  return async function (dispatch) {
    await axios.get("http://localhost:3001/dogs")
      .then(json => dispatch({ type: GET_ALL_RAZAS, payload: json.data }))
      .catch(error => {
        console.log(error);
      });
  };
}

export function getDetailRaza(id) {
  return async function (dispatch) {
    await axios.get(`http://localhost:3001/dogs/${id}`)
      .then(json => dispatch({ type: GET_DETAIL_RAZA, payload: json.data }))
      .catch(error => {
        console.log(error);
      });
  };
}

/* export function createRaza(raza) {
  return async function (dispatch) {
    await axios.post(`http://localhost:3001/dogs`, raza)
      .then(() => dispatch({ type: CREATE_RAZA, payload: raza }))
      .catch(error => {
        console.log(error);
      });
  };
} */


/* export function filterRealOrCreateRazas(info, key) {
  return async function (dispatch) {
    if (key && key !== "Todos") {
      await info.filter( async e =>await typeof e.id === typeof key)
      .then(json => dispatch({ type: FILTER_REAL_OR_CREATE_RAZAS, payload: json }))
    }
    else {
      dispatch({ type: FILTER_REAL_OR_CREATE_RAZAS, payload: info })
    }
  };
} */
export function filterRealOrCreateRazas(info, key) {
if(key!=="default"){
    const RoF = info.filter(e => typeof e.ID ===key)
    console.log(RoF)
return{
  type:FILTER_REAL_OR_CREATE_RAZAS,
  payload:RoF
}}else{
  return{
    type:FILTER_REAL_OR_CREATE_RAZAS,
    payload:info
  }
}
}
/* export function orderRazas(info, key) {
  return async function (dispatch) {
    console.log(key)
    if (key !== "default") {
      console.log(info)
      await info.sort(order[key])
        .then(orden =>dispatch({ type: ORDER_RAZAS, payload: orden }))
        .catch(error=>console.log(error))
    }
    else {
      dispatch({ type: ORDER_RAZAS, payload: info }).catch(error=>console.log(error))
    }
  };
} */
export function orderRazas(info, key){
  if(key!=="default"){
  const ordenadito = info.sort(order[key])
  return {
    type:ORDER_RAZAS,
    payload:ordenadito
  }}
  else{
    return {
      type:ORDER_RAZAS,
      payload:info
    }
  }
  
}

export function filterEqualAllRazas(info) {
  return async function (dispatch) {
    dispatch({ type: FILTER_EQUAL_ALL_RAZAS, payload: info })
  };
}

export function clearDetailRaza(info) {
    return{ type: CLEAR_DETAIL_RAZA}
}
/*   export function filterPesoRazas(info,key) {
    return async function(dispatch) {
       await info.sort(alfabetico[key])
        .then(orden => dispatch({ type:FILTER_AlFABETIC_RAZAS, payload: orden }))
    };
  } */
/* export function filterTemperament(info, temperamento) {
  return async function (dispatch) {
    if (temperamento && temperamento !== "Todos") {

       await info.filter(e => e.Temperamento.find(a => a.Nombre === temperamento) !== undefined).then(e=>console.log(e))
        .then(json => dispatch({ type: FILTER_TEMPERAMENT, payload: json }))
    }
    else {
      dispatch({ type: FILTER_TEMPERAMENT, payload: info })
    }
  };
} */

export function filterTemperament(info, temperamento) {
    if (temperamento !== "default") {
       const Temp = info.filter(e => e.Temperamento.find(a => a.Nombre === temperamento) !== undefined)
      return{
        type:FILTER_TEMPERAMENT,
        payload:Temp
      }
    }
    else {
      return{ 
        type: FILTER_TEMPERAMENT, 
        payload: info 
      }
    }
}

export function getAllTemperaments(id) {
  return async function (dispatch) {
    await axios.get(`http://localhost:3001/temperaments`)
      .then(json => dispatch({ type: GET_ALL_TEMPERAMENTS, payload: json.data }))
      .catch(error => {
        console.log(error);
      });
  };
}
export  function createRaza(info,temp) {
  return async function (dispatch) {

    const obj = await {
      Nombre:info.Nombre?info.Nombre:"Anonimo",
      Peso:{
        Min:info.PesoMin,
        Max:info.PesoMax,
      },
      Altura:{
        Min:info.AlturaMin,
        Max:info.AlturaMax,
      },
      Temperamentos:temp,
      Años_de_vida:{
        Min:info.Años_de_vidaMin,
        Max:info.Años_de_vidaMax,
      },
      Imagen:info.Imagen,
    }
    await axios.post(`http://localhost:3001/dogs`,obj)
      .then(res => dispatch({ type: CREATE_RAZA, payload: res.data }))
      .catch(error => {
        console.log(error);
      });
  };
}

export function getQuery(name) {
  return async function (dispatch) {
    await axios.get(`http://localhost:3001/dogs?name=${name}`)
      .then(json => dispatch({ type: GET_QUERY, payload: json.data }))
      .catch(error => {
        console.log(error);
      });
  };
}