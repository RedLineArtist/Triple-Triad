import Page from "@/components/Page"
import axios from "axios"
import Link from "next/link"
import { useState, useEffect } from "react"

const cardsCollection = () => {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { data: result } = JSON.parse(
        JSON.stringify(await axios("https://triad.raelys.com/api/cards"))
      )

      setCards(result.results)
    })()
  }, [setCards])

  if (!cards) {
    return <div className="">LOADING...</div>
  }

  return (
    <Page>
      <div className="grid grid-cols-3 mx-auto">
        {cards.map((card) => (
          <div className="mb-2" key={card.id}>
            <Link href={`/cards/${card.id}`}>
              <h1>{card.name}</h1>
              <img src={`${card.image}`} />
            </Link>
          </div>
        ))}
      </div>
    </Page>
  )
}

export default cardsCollection
