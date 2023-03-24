import { useParams } from "react-router-dom";
import { useInputStore } from "../question6/redux/inputStore";

const Done = () => {
  const params = useParams();

  const store = useInputStore();

  let todo;

  for (let i = 0; i < store.todos.length; i++) {
    if (store.todos[i].id === parseInt(params.id)) {
      todo = store.todos[i];
    }
  }

  let doneOrNo = "Not done.";

  if (todo.completed) {
    doneOrNo = "Done.";
  }
  return <div>{doneOrNo}</div>;
};

export default Done;
