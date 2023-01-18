import Page from "@/components/Page"
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
    <Page>
      <div></div>
    </Page>
  )
}

export default App
