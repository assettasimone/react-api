import axios from 'axios'
import { useState, useEffect } from 'react'
import ActorCard from './components/ActorCard'

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
          <ActorCard actors={actors} />
        </div>

      </section >
    </>
  )
}

export default App
