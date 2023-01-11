import axios from "axios";
import { useState } from "react";

const App = () => {
  const [card, setCard] = useState({});
  const handleKeyUp = async (event) => {
    if (event.code !== "Enter") {
      return;
    }
    const id = Number.parseInt(event.currentTarget.value);
    const { data } = await axios(`https://triad.raelys.com/api/cards/${id}`);
    setCard(data);
    console.log(card);
  };

  return (
    <div>
      <h1 className="font-bold text-red-600">hello</h1>
      <input placeholder="id" onKeyUp={handleKeyUp} />
    </div>
  );
};

export default App;
