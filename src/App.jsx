import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [actors, setActors] = useState([])

  function fetchActors() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(res => setActors(res.data))
  }

  useEffect(fetchActors, [])

  console.log(actors);


  return (
    <>

    </>
  )
}

export default App
