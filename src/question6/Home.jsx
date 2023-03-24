import { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateTodos, useInputStore } from "./redux/inputStore";
const Home = () => {
  const store = useInputStore();

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

    if (response.ok) {
      const data = await response.json();

      updateTodos(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="grid sm:grid-cols-3 gap-4 w-full">
      {store.todos.map((todo, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 border border-slate-400 rounded-xl"
          >
            <Link to={`/done/${todo.id}`}>{todo.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
