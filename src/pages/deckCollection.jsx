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
        <div className="flex justify-between">
          {deck.map(({ image, name, id }) => (
            <div key={id}>
              <h2 className="p-1 m-1 text-xs">{name}</h2>
              <img src={image} alt={name} />
            </div>
          ))}
        </div>
      )}
    </Page>
  )
}

export default deckCollection
