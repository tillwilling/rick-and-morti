import './Card.css'
import React, { useState } from 'react'

export default function Card({
  name,
  image,
  status,
  origin,
  location,
  bookmarked,
}) {
  const [active, setActive] = useState(false)

  return (
    <section className="Card">
      <div
        onClick={handleClick}
        className={bookmarked ? 'Card__bookmark--active' : 'Card__bookmark'}
      ></div>
      <h2>{name}</h2>
      <div className="imgContainer">
        <img className="Image" src={image} alt="" />
      </div>
      <div className="Details">
        <p>Origin: {origin.name}</p>
        <h3>Last known location: {location.name}</h3>
        <p>Status: {status}</p>
      </div>
    </section>
  )
  function handleClick() {
    setActive(!active)
  }
}
