import React from "react";
import "./App.css";

function Footer() {
  return (
    <section>
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
            <p>
              Adapted from “The Thing from the Future” by&nbsp;
              <a
                href="http://situationlab.org/project/the-thing-from-the-future/"
                target="_blank"
                rel="noreferrer"
                alt="the situation lab"
              >
                the situation lab
              </a>
            </p>
          </div>
        </footer>
      </header>
    </section>
  );
}

export default Footer;
