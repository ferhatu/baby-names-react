import React from "react";
import Babynames from "./BabyNames";
import BabyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  return (
    <div>
      <Babynames data={BabyNamesData} />
    </div>
  );
}

export default App;
