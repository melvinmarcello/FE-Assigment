import { useEffect, useState } from "react"

import PokeDetail from "../components/PokeDetail"
import { useParams } from "react-router-dom"



const Detail = () => {
    const [pokemon, setPokemon] = useState([])

    const {id} = useParams()


    const getPokemonById = async (id) =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const datas = await res.json()
        setPokemon(datas)
    }

    useEffect(() =>{
        getPokemonById(id)
    }, [id])    



    return(
           <PokeDetail pokemon={pokemon}/>
    )
}

export default Detail