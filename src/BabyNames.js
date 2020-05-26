import React from "react";

function BabyNames(props) {
  return (
    <div className="container">
      <div>
        <input type="search" placeholder="Search Name" className="search" />
      </div>
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
