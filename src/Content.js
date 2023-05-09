import React from "react";
import Prompt from "./Prompt";
import "./App.css";

function Content() {
  return (
    <section className="content">
      <div className="section contentLeft">
        <h1>future prompts</h1>
      </div>

      <div className="section contentCenter">
        <Prompt />
      </div>

      <div className="section contentRight">
        <h2> What does it look like?</h2>
      </div>
    </section>
  );
}

export default Content;
