import React from "react";
import "./App.css";
import FutureThings from "./futureThings.json";

class Prompt extends React.Component {
  constructor() {
    super();
    this.state = {
      adjective: FutureThings.adjectives[this.getRandomInt(31)],
      artifact: FutureThings.artifacts[this.getRandomInt(31)],
      topic: FutureThings.topics[this.getRandomInt(31)],
    };
    this.futureThings = this.futureThings.bind(this);
  }

  // create random number, still need to define max based on data length
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // create a function that pulls a random options from the set
  futureThings() {
    this.setState({
      adjective: FutureThings.adjectives[this.getRandomInt(30)],
      artifact: FutureThings.artifacts[this.getRandomInt(30)],
      topic: FutureThings.topics[this.getRandomInt(30)],
    });
  }

  render() {
    return (
      <section>
        <div className="promptBar">
          <div className="promptTitle"> Welcome to 2030</div>
          <div className="promptShuffle" onClick={this.futureThings}>
            Shuffle ↺
          </div>
        </div>

        <div className="promptBox">
          <p className="prompttext">
            In a <span>{this.state.adjective.toLowerCase()}</span> future, there
            is a <span>{this.state.artifact.toLowerCase()}</span> related to{" "}
            <span>{this.state.topic.toLowerCase()} </span>.
          </p>
        </div>
      </section>
    );
  }
}

export default Prompt;
