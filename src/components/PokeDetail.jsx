import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"

const PokeDetail = ({pokemon}) => {
    const collectionFromLocal =  JSON.parse(localStorage.getItem('collection') || '[]')

    const [catched, setCatched] = useState(false)
    const [message, setMessage] = useState("")
    
    const [collection, setCollection] = useState(collectionFromLocal)
    

    const handleCatchPokemon = () =>{
        const probrability = ~~(Math.random() * 100) + 1
        if(probrability > 50) {
            setCatched(true)        
            setCollection([...collection ,pokemon])
        }else{
            setMessage("Failed to catch Pokemon, Please Try Again")
        }
    }
    
    useEffect(() =>{
        localStorage.setItem('collection', JSON.stringify(collection));
    }, [collection])


  return (
    <section id="detail">
        <Container>
            <section className="py-5 detailSection">
            <div className="container">
                <div className="row gx-5 align-items-center">
                <aside className="col-lg-6">
                    <div className="rounded-4 mb-3 d-flex justify-content-center">                    
                        <img alt=''className="rounded-4 fit detailImage" src={`../assets/${pokemon?.id}.png`} />                
                    </div>            
                </aside>
                <main className="col-lg-6">
                    <div className="ps-lg-3">
                    <h4 className="title text-dark text-capitalize">
                       {pokemon.name}
                    </h4>

                    <hr />
                    <div className="row mb-4 utils">
                        <div className="col-md-4 col-6">
                        <label className="mb-2">Types</label>
                        <select className="form-select border border-secondary">
                            {pokemon.types?.map((type, key) => (
                                <option key={key}>{type.type.name}</option>
                                )
                               
                            )}                        
                        </select>
                        </div>

                        <div className="col-md-4 col-6">
                            <label className="mb-2 d-block text-bold">Weight: {pokemon.weight}</label>
                        </div>
                        <div className="col-md-4 col-6">
                            <label className="mb-2 d-block text-bold">Height: {pokemon.height}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label className="mb-2">Abilities</label>
                            <select className="form-select border border-secondary">
                                {pokemon.abilities?.map((ability, key) => (
                                    <option key={key}>{ability.ability.name}</option>
                                    )
                                
                                )}                        
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="mb-2">Moves</label>
                            <select className="form-select border border-secondary">
                                {pokemon.moves?.map((move, key) => (
                                    <option key={key}>{move.move.name}</option>
                                    )
                                
                                )}                        
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="mb-2">Stats</label>
                            <select className="form-select border border-secondary">
                                {pokemon.stats?.map((stat, key) => (
                                    <option key={key}>{stat.stat.name}</option>
                                    )
                                
                                )}                        
                            </select>
                        </div>
                    </div>

                    <button disabled={catched} className="btn btn-primary shadow-0 me-3 mt-4" onClick={() => handleCatchPokemon(pokemon)}> Catch Pokemon </button>                    
                    </div>               
                    {catched ? <h4>Congratuluations pokemon catched and added to your collection</h4> : message}
                </main>
                </div>
            </div>
            </section>
        </Container>
    </section>
  )
}

export default PokeDetail