import axios from "axios"
import { useState } from "react"

const App = () => {
  const [card, setCard] = useState(null)
  const handleKeyUp = async (event) => {
    if (event.code !== "Enter") {
      return
    }
    const id = Number.parseInt(event.currentTarget.value)
    const data = JSON.parse(
      JSON.stringify(await axios(`https://triad.raelys.com/api/cards/${id}`))
    )
    setCard(data.data)
    console.log(card)
  }

  return (
    <div>
      <input placeholder="Card id" onKeyUp={handleKeyUp} />
      {!card ? (
        <h1>No Card</h1>
      ) : (
        <>
          <h1 className="p-2 m-1 italic">{card.name}</h1>
          <img className="p-1 m-1" src={`${card.image}`} />
        </>
      )}
    </div>
  )
}

export default App
