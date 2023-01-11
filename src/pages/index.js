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
      <input placeholder="id" onKeyUp={handleKeyUp} />
      {!card ? (
        <h1>No Card</h1>
      ) : (
        <>
          <h1>{card.name}</h1>
          <img src={`${card.image}`} />
        </>
      )}
    </div>
  )
}

export default App
