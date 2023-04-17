import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`Input value: ${inputValue}`);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleDropdownToggle}
      onMouseLeave={handleDropdownToggle}
    >
      <button className="dropdown-toggle" onClick={handleDropdownToggle}>
        Open Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="dropdown-input"
            placeholder="Enter value"
          />
          <button className="dropdown-button" onClick={handleButtonClick}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
