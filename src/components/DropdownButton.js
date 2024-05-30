import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { dispatch } = useContext(AppContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
    dispatch({ type: 'CHG_CURRENCY', payload: option.label });
  };

  return (
    <div className="dropdown">
      <button className="btn btn-success dropdown-toggle" type="button" onClick={toggleDropdown}>
        {selectedOption ? 'Currency (' + selectedOption.value + ')' : 'Select an Option'}
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#" onClick={() => handleOptionSelect({ value: '$ Dollar', label: '$'})}>$ Dollar</a>
        <a className="dropdown-item" href="#" onClick={() => handleOptionSelect({ value: '£ Pound', label: '£'})}>£ Pound</a>
        <a className="dropdown-item" href="#" onClick={() => handleOptionSelect({ value: '€ Euro', label:'€' })}>€ Euro</a>
        <a className="dropdown-item" href="#" onClick={() => handleOptionSelect({ value: '₹ Rupee', label: '₹'})}>₹ Rupee</a>

      </div>
    </div>
  );
}

export default DropdownButton;

