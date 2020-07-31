import React from "react";
import "./App.css";
import Pic from "./Pic";
import img01 from "./img/1.jpg";
import img02 from "./img/2.gif";
import img03 from "./img/3.jpg";
import img04 from "./img/4.png";
import img05 from "./img/5.jpg";
import img06 from "./img/6.jpg";
import img07 from "./img/7.png";
import img08 from "./img/8.png";
import img09 from "./img/9.png";

function App() {
  return (
    <div className="App">
      <div className="Pic-wrapper">
        <header className="App-header">morrisworld</header>
        <div className="Column">
          <Pic imgUrl={img09} alt="image" />
          <Pic imgUrl={img05} alt="image" />
          <Pic imgUrl={img01} alt="image" />
        </div>
        <div className="Column">
          <Pic imgUrl={img08} alt="image" />
          <Pic imgUrl={img04} alt="image" />
        </div>
        <div className="Column">
          <Pic imgUrl={img07} alt="image" />
          <Pic imgUrl={img03} alt="image" />
        </div>
        <div className="Column">
          <Pic imgUrl={img06} alt="image" />
          <Pic imgUrl={img02} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default App;
