// 3. input och knapp i en komponent . 3p
// Skapa en komponent: InputAndButton som innehåller ett text-fält och en knapp.
// När man klickar på knappen ska det man skrev visas i en div i App.jsx.

import { useState } from "react";
import InputAndButton from "./InputAndButton";

function App() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <InputAndButton setMessage={setMessage} />
      <div>{message}</div>
    </div>
  );
}

export default App;
