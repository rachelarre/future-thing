import React from "react";
import Prompt from "./Prompt";
import "./App.css";

function Content() {
  return (
    <section className="content">
      <div className="section contentLeft">
        <h1>Welcome ~</h1>
      </div>

      <div className="section contentCenter">
        <Prompt />
      </div>

      <div className="section contentRight">
        <h1> What does it look like?</h1>
      </div>
    </section>
  );
}

export default Content;
