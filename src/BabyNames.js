import React from "react";

function BabyNames(props) {
  return (
    <div className="container">
      <div className="names-container">
        {props.data.map((data) => {
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
