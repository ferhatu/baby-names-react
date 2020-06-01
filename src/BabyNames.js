import React, { useState } from "react";

function BabyNames(props) {
  const [names, setNames] = useState(props.data);
  const [inputValue, setInputValue] = useState("");

  const filteredNames = () => {
    setNames(
      names.filter((baby) => baby.name.toLowerCase().includes(inputValue))
    );
  };

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
    filteredNames();
  };
  return (
    <div className="container">
      <div>
        <input
          type="search"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search Name"
          className="search"
        />
      </div>
      <div className="names-container">
        {names

          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((data) => {
            return (
              <div className="name">
                <span className={data.sex}>{data.name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default BabyNames;
