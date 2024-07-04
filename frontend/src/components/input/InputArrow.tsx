import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const InputArrow = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="input-container">
      <input type="text" value={value} className="input-field" readOnly />
      <div className="arrow-container">
        <FontAwesomeIcon
          icon={faArrowUp}
          className="arrow-icon"
          onClick={handleIncrement}
        />
        <FontAwesomeIcon
          icon={faArrowDown}
          className="arrow-icon"
          onClick={handleDecrement}
        />
      </div>
    </div>
  );
};

export default InputArrow;
