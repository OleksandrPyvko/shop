import { useState } from "react";
import { faq } from "../const/const";
import DropDownFaq from "./DropDownItem";

function DropDownList() {
  const [isOpened, setIsOpened] = useState(null);

  function handleClick(index) {
    setIsOpened(index === isOpened ? null : index);
  }

  return (
    <div>
      {faq.map((question, i) => (
        <DropDownFaq
          key={question.title}
          title={question.title}
          desc={question.desc}
          index={i}
          onClick={() => handleClick(i)}
          isOpen={isOpened === i}
        />
      ))}
    </div>
  );
}

export default DropDownList;
