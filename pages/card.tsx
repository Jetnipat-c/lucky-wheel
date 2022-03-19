import type { NextPage } from "next";
import { useState } from "react";

const Card: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`${isOpen ? "flip-card" : ""} flip`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flip-content">
          <div className="flip-front">
            <img src="/assets/card.png" />
          </div>
          <div className="flip-back">
            <strong>BILL MURRAY</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
