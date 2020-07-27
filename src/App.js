import React from "react";
import "./App.css";
import Pic from "./Pic";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpeg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.png";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";

function App() {
  return (
    <div className="App">
      <div className="Pic-wrapper">
        <header className="App-header">morrisworld</header>
        <div className="Column">
          <Pic imgUrl={img1} alt="deez nuts" />
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
          <Pic imgUrl={img6} alt="deez nuts" />
          <Pic imgUrl={img1} alt="deez nuts" />
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
          <Pic imgUrl={img6} alt="deez nuts" />
        </div>
        <div className="Column">
          <Pic imgUrl={img6} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img1} alt="deez nuts" />
          <Pic imgUrl={img6} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img1} alt="deez nuts" />
        </div>
        <div className="Column">
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
          <Pic imgUrl={img6} alt="deez nuts" />
          <Pic imgUrl={img1} alt="deez nuts" />
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
          <Pic imgUrl={img6} alt="deez nuts" />
          <Pic imgUrl={img1} alt="deez nuts" />
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
        </div>
        <div className="Column">
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img1} alt="deez nuts" />
          <Pic imgUrl={img6} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
          <Pic imgUrl={img3} alt="deez nuts" />
          <Pic imgUrl={img2} alt="deez nuts" />
          <Pic imgUrl={img1} alt="deez nuts" />
          <Pic imgUrl={img6} alt="deez nuts" />
          <Pic imgUrl={img5} alt="deez nuts" />
          <Pic imgUrl={img4} alt="deez nuts" />
        </div>
      </div>
    </div>
  );
}

export default App;
