import './Card.css'

export default function Card({
  name,
  image,
  status,
  origin,
  location,
  bookmarked,
}) {
  return (
    <section className="Card">
      <div className={bookmarked ? 'bookmark active' : 'bookmark'}></div>
      <h2>{name}</h2>
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      <p>Origin: {origin.name}</p>
      <h3>Location: {location.name}</h3>
      <p>Status: {status}</p>
    </section>
  )
}
