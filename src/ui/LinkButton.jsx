import { AiOutlineArrowRight } from "react-icons/ai";

function LinkButton({ className }) {
  return (
    <button
      className={`bg-stone-700 bg-opacity-50 w-[35px] h-[35px] flex justify-center items-center ${className}`}
    >
      <AiOutlineArrowRight />
    </button>
  );
}

export default LinkButton;
