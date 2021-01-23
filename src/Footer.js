import React from "react";
import "./App.css";

function Footer() {
  return (
    <section>
      <hr className="section"></hr>
      <header className="section">
        <footer className="ft-main">
          <div className="ft-left">
            <b>How to use</b> <br />
            <ol>
              <li>Shuffle to select a set of 3 cards </li>
              <li>
                Individually spend two minutes brainstorming artifacts ~draw,
                write, sketch, doodle ~ anything goes{" "}
              </li>
              <li>Share two with your group</li>
              <li>Repeat</li>
            </ol>
            <br />
          </div>

          <div className="ft-right">
            <p>
              <b>Contributors </b> <br />
              Based on “The Thing from the Future” by&nbsp;
              <a
                href="http://situationlab.org/project/the-thing-from-the-future/"
                target="_blank"
                rel="noreferrer"
                alt="the situation lab"
              >
                the situation lab
              </a>
              <br />
              Adapted for the Pittsburgh Racial Justice Summit 2021 by&nbsp;
              <a
                href="https://hillarywinnow.medium.com/"
                target="_blank"
                rel="noreferrer"
                alt="Hillary Carey"
              >
                Hillary Carey
              </a>
              <br />
              Designed and developed by&nbsp;
              <a
                href="https://rachelarre.com"
                target="_blank"
                rel="noreferrer"
                alt="Rachel Arredondo"
              >
                Rachel Arredondo
              </a>
            </p>
          </div>
        </footer>
      </header>
    </section>
  );
}

export default Footer;
