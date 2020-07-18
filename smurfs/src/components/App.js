import React from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfCard from "./SmurfCard";

export default function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <SmurfCard />
      <SmurfForm />
    </div>
  );
}
