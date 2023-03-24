const ButtonWithChildren = ({ color, children }) => {
  let colorAtt;

  if (color === "blue") {
    colorAtt = `bg-blue-800 hover:bg-blue-700 text-blue-200 hover:text-blue-50`;
  } else {
    colorAtt = `bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-slate-50`;
  }

  return (
    <button className={`${colorAtt} py-2 px-4 rounded-lg`}>{children}</button>
  );
};

export default ButtonWithChildren;
