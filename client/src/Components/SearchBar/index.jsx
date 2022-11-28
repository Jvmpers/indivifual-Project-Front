import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterEqualAllRazas, getQuery } from '../../Redux/Action'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import style from "./SearchBar.module.css";
export default function SearchBar() {
    const [input, setInput] = useState("")
const dispatch = useDispatch();

let handleSubmit = (e) => {
    e.preventDefault();
    /*  dispatch(createRaza(input)); */
    console.log(input);
    dispatch(filterEqualAllRazas([]))
    dispatch(getQuery(input));
    setInput("")
}
    return (
        <>
                <input className={style.searchInput} placeholder="Search..." type={"text"} name="Buscador" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className={style.searchButton} type={"submit"} onClick={(e) =>{ handleSubmit(e)}}><FontAwesomeIcon  icon={faMagnifyingGlass} /></button>
        </>
    )
}
