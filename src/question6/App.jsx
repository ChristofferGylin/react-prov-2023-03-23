// 6. React router med todo-items 4p
// Visa på sidan: Titeln på alla todo-items från detta api: https://jsonplaceholder.typicode.com/todos/
//
// Varje titel ska vara en länk. När man klickar på länken ska man komma till en sida där det
// enbart står Done eller Not done beroende på om todo-item är completed eller inte.

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />;
    </div>
  );
}

export default App;
