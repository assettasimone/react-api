import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [actors, setActors] = useState([])

  function fetchActors() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(res => setActors(res.data))
  }

  useEffect(fetchActors, [])

  return (
    <>
      <section className="container py-4">

        <div className="row align-items-stretch">
          {actors.map(actor => (
            <div key={actor.id} className="col-3 mb-4">
              <div className="card"  >
                <div className='object-fit-cover'
                  style={{
                    backgroundImage: `url( ${actor.image})`,
                    height: '250px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} ></div>

                <div className="card-body">
                  <h3 className="card-title">{actor.name}</h3>
                  <p className='card-text'>{actor.}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section >
    </>
  )
}

export default App
