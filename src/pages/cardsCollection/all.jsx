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

      https: setCards(result.results)
    })()
  }, [setCards])

  if (!cards) {
    return (
      <Page>
        <div className="m-auto text-4xl">LOADING...</div>
      </Page>
    )
  }

  return (
    <Page>
      <h1 className="text-xl mb-4 mt-2 ml-2 font-bold">
        Cards Collection (326)
      </h1>
      <div className="grid grid-cols-3 mx-auto md:grid-cols-5 w-full">
        {cards.map((card) => (
          <div className="mb-2 mx-auto" key={card.id}>
            <Link href={`/cards/${card.id}`}>
              <h2 className="truncate w-28 text-lg">{card.name}</h2>
              <img src={`${card.image}`} />
            </Link>
          </div>
        ))}
      </div>
    </Page>
  )
}

export default cardsCollection
