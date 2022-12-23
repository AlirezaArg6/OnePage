import React, { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { BsPatchQuestion } from "react-icons/bs";

import "./Accordion.css";

export default function Accordion({ description, title }) {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  return (
    <div
      className={`accordion ${isAccordionExpanded && "accordion--expanded"}  `}
    >
      <div
        className="accordion__header"
        onClick={() => setIsAccordionExpanded((prevState) => !prevState)}
      >
        <div className="accordon__header__right ">
          <BsPatchQuestion className="accordion__queston-icon" />
          <span className="question__title">{title}</span>
        </div>
        <div className="accordon__header__left">
          {isAccordionExpanded ? (
            <GoChevronUp className="accordion__up-icon" />
          ) : (
            <GoChevronDown className="accordion__up-icon" />
          )}
        </div>
      </div>

      <div className="accordion__body ">{description}</div>
    </div>
  );
}
