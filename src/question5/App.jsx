// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.

import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (response.ok) {
      const data = await response.json();

      setUsers(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="grid sm:grid-cols-3 gap-4 w-full">
      {users.map((user, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 border border-slate-400 rounded-xl"
          >
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.address.city}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
