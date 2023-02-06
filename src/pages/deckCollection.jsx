import Page from "@/components/Page"
import axios from "axios"
import { useState } from "react"

const deckCollection = () => {
  const [deck, setDeck] = useState(null)
  const handleKeyUp = async (event) => {
    if (event.code !== "Enter") {
      return
    }
    const id = Number.parseInt(event.currentTarget.value)
    const data = JSON.parse(
      JSON.stringify(await axios(`https://triad.raelys.com/api/decks/${id}`))
    )
    setDeck(data.data.cards)
    console.log(deck)
  }

  return (
    <Page>
      <input
        placeholder="Deck id"
        onKeyUp={handleKeyUp}
        className="border-2 border-black w-16"
      />
      {!deck ? (
        <h1>No Deck</h1>
      ) : (
        <div>
          {deck.map(({ icon, description }) => (
            <img src={icon} key={icon} alt={description} />
          ))}
        </div>
      )}
    </Page>
  )
}

export default deckCollection
