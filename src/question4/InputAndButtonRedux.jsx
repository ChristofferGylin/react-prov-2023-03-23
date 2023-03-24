import { useRef } from "react";
import { updateInput } from "./redux/inputStore";

const InputAndButtonRedux = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input
        className="border border-slate-400 p-4"
        ref={inputRef}
        type="text"
        name=""
        id=""
        placeholder="Type something"
      />
      <button
        onClick={() => {
          updateInput(inputRef.current.value);
          inputRef.current.value = "";
        }}
        className="border border-slate-400 p-4"
      >
        Print
      </button>
    </div>
  );
};

export default InputAndButtonRedux;
