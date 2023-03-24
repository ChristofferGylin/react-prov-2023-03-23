// 3. input och knapp i en komponent med redux. 3p
// Skapa en komponent: InputAndButtonRedux som innehåller ett text-fält och en knapp.
// När man klickar på knappen ska det man skrev sparas i Redux och
// visas i en div i App.jsx.

import InputAndButtonRedux from "./InputAndButtonRedux";
import { useInputStore } from "./redux/inputStore";

function App() {
  const store = useInputStore();
  return (
    <div>
      <InputAndButtonRedux />
      <div>{store.message}</div>
    </div>
  );
}

export default App;
