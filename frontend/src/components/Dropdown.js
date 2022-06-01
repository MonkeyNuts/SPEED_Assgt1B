import React from 'react';
import SEPractices from "../dummydata/SEPractices"

const optionItems = SEPractices.map((SEPractice) =>
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
);

const Dropdown = ({ handleDropdown }) => {
  return (
    <div>
      <select onChange={handleDropdown}>
        <option value="all">Select an SE Practice </option>
        {optionItems}
      </select>
    </div>
  )
}
export default Dropdown;