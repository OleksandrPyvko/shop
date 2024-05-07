function LinkButton({ children }) {
  return (
    <button className="bg-stone-700 bg-opacity-50 w-[35px] h-[35px] flex justify-center items-center">
      {children}
    </button>
  );
}

export default LinkButton;
