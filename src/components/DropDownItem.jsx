import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function DropDownItem({ title, desc, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="text-stone-500 mx-6 transition-all duration-1000 ease-in-out  border-y border-stone-800 flex flex-col "
      style={{
        paddingBottom: isOpen ? "2rem" : "",
      }}
    >
      <div
        role="button"
        onClick={onClick}
        className=" pointer flex items-center justify-between "
      >
        <h3 className="font-bold text-sm py-[23px]">{title}</h3>
        <span
          className={`transition duration-700 ${isOpen ? "rotate-180" : ""}`}
        >
          ⬇
        </span>
      </div>

      <p
        ref={contentRef}
        className={`text-sm text-stone-500 overflow-y-hidden opacity-0 transition-all duration-700 ease-in-out ${
          isOpen ? " opacity-100" : ""
        }`}
        style={{
          height: contentHeight,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default DropDownItem;
