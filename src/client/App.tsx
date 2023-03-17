import React from "react";
import Typograpy from "./components/Typography";
import "./assets/styles/style.css";

const App = () => {
  return (
    <div className="box">
      <Typograpy varient="h1">
        Hello ReactApp from Scratch using Webpack Babel Typescript
      </Typograpy>
    </div>
  );
};

export default App;
