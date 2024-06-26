import { useEffect, useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'


const Collection = () => {

  const collectionFromLocal =  JSON.parse(localStorage.getItem('collection') || '[]')
  const [collection, setCollection] = useState([])

  const handleRemove = (data) =>{
    const newData = collection.filter((poke) => poke.id != data.id)
    setCollection(newData)
    localStorage.setItem('collection', JSON.stringify(newData))
    if(collection.length === 1) localStorage.clear()
  }


  useEffect(() =>{
    setCollection(collectionFromLocal)
  }, [])

  return (
   <section id="collection" className='py-5'>
        <Container>
          <h3 className='text-center text-uppercase mb-3'>Your Collection</h3>
            <Row className='justify-content-center gap-4'>
                {collection.map((data) => (
                  <Col key={data.id} xl="8"  className="image-colletion">
                    <div className="collection-wrapper">
                      <img className="postingan-image fluid" src={`./assets/${data.id}.png`} alt="" />
                      <h3 className='text-capitalize'>{data.name}</h3>
                      <Button onClick={() => handleRemove(data)} className='remove-button ms-auto'>Remove</Button>
                    </div>  
                  </Col>                  
                ))}
            </Row>
        </Container>
   </section>
  )
}

export default Collection