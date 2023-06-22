import { Card, Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Pagination from "../components/Pagination"

const Pokemon = () => {

    const limit = 50
    const [currentPage, setCurrentPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(10)
    const [pokemon, setPokemon] = useState([])

    const lastIndex = currentPage * pokePerPage
    const firstIndex = lastIndex - pokePerPage
    const dataPage = pokemon.slice(firstIndex, lastIndex)

    const getPokemon = async () =>{

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        const datas = await res.json()
        setPokemon(datas.results)
        
    }

      useEffect(() =>{
        getPokemon()
      }, [])
    
  return (
    <section id="pokemon" className="py-5">
        <Container className="justify-content-center">
            <Row className="justify-content-center">
                {dataPage.map((data, i) => (
                    <Col xl={3} md={4} sm={6} key={i} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={`./src/assets/${data.url.split('/')[6]}.png`} className="imgCard" />
                            <Card.Body>
                                <Card.Title className="text-capitalize">
                                    <Link to={`/detail/${data.url.split('/')[6]}`}>{data.name}</Link>
                                    </Card.Title>                                           
                            </Card.Body>
                        </Card>
                    </Col>
                    )                                
                )}
            <Pagination currentpage={currentPage} totaldata={limit} pokeperpage={pokePerPage} setPage={setCurrentPage}/>
            </Row>
        </Container>
        
    </section>
  )
}

export default Pokemon