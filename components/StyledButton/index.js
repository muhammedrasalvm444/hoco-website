export const StyledButton = ({ text, bgColor, arrow }) => {
  return (
    <button
      className={` text-textWhite bg-blueColor px-4 py-3 my-2 font-medium uppercase duration-500 md:mx-8  rounded
    hover:bg-green-600`}
    >
      <div className="flex items-center justify-center gap-2 text">
        <p>{text}</p>
        {arrow}
      </div>
    </button>
  );
};
