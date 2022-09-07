import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Killian" animal="Cat" breed="Bombay"></Pet>
      <Pet name="Angel" animal="Dog" breed="Golden Retriever"></Pet>
      <Pet name="Mac" animal="Dog" breed="Golden Doodle"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
