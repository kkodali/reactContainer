import React, { Component } from "react";
import ChildComp from "./components/childComponent";

class App extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      step: 0
    };
    this.updateStep = this.updateStep.bind(this);
  }

  updateStep = async event => {
    event.preventDefault();
    if (this.state.step >= 2) {
      this.setState({
        step: 0
      });
    } else {
      this.setState({
        step: this.state.step + 1
      });
    }
  };

  renderComponent() {
    switch (this.state.step) {
      case 0:
        return (
          <ChildComp
            childName={"Child 1: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
      case 1:
        return (
          <ChildComp
            childName={"Child 2: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
      case 2:
        return (
          <ChildComp
            childName={"Child 3: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
      default:
        return (
          <ChildComp
            childName={"Child 1: "}
            buttonName={"Click Meh"}
            controlFunc={this.updateStep}
          />
        );
    }
  }

  render() {
    console.log(this.state);
    return <div className="App">Parent Component {this.renderComponent()}</div>;
  }
}

export default App;
