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
    <div className="input-containere">
      <input type="text" value={value} className="input-fielde" readOnly />
      <div className="arrow-containere">
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
