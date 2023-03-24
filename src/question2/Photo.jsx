const Photo = ({ imgSrc }) => {
  return (
    <div className="flex justify-center items-center p-8 rounded bg-slate-200 shadow-lg shadow-slate-800/50">
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Photo;
