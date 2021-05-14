import './App.css'
import Card from './Card'
import React, { useState, useEffect } from 'react'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters(resBody.results))
  }, [url])
  return (
    <div className="App">
      {characters.map(character => {
        const { name, image, origin, location, id, status } = character
        return (
          <Card
            key={id}
            name={name}
            image={image}
            origin={origin}
            location={location}
            status={status}
          />
        )
      })}
    </div>
  )
}
