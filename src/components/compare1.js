import React from "react";
import Compare from "../compare";
class AfterCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickid: null };
  }
  btn1click = () => {
    this.setState({ clickid: 1 });
  };
  btn2click = () => {
    this.setState({ clickid: 2 });
  };
  render() {
    if (!this.state.clickid) {
      return (
        <div>
          <center>
            <h1 style={{ marginTop: "25px" }} className="ui header">
              Please Select the type of comparison
            </h1>

            <button
              id="btn"
              className="ui button primary"
              onClick={this.btn1click}
            >
              Dynamic
            </button>
            <br />
            <button
              id="btn"
              className="ui button primary"
              onClick={this.btn2click}
            >
              Static
            </button>
            <br />
            <p style={{ marginTop: "20px" }}>
              But what do this means?
              <br />
              Dynamic : Continuosly Changing Subscribers and their Difference
              <br />
              Static : A Static Page is Showed (Efficient)
            </p>
          </center>
        </div>
      );
    }

    return (
      <Compare
        id={this.state.clickid}
        backclick={() => this.setState({ clickid: null })}
      />
    );
  }
}
export default AfterCompare;
