import { AiOutlineArrowRight } from "react-icons/ai";

function LinkButton({ className, linkTo }) {
  return (
    <button
      className={`bg-stone-700 bg-opacity-70 w-[45px] h-[45px] rounded-full flex justify-center items-center ${className}`}
      href={linkTo}
    >
      <AiOutlineArrowRight />
    </button>
  );
}

export default LinkButton;
