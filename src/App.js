import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

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
      <Header />
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
