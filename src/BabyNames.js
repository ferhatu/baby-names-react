import React from "react";

function BabyNames(props) {
  return (
    <div className="names-container">
      {props.data.map((data) => {
        return (
          <ul>
            <li className="name">{data.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
export default BabyNames;
