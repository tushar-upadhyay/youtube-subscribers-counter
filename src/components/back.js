import React from "react";
class Back extends React.Component {
  render() {
    return (
      <div id="back">
        <button
          onClick={this.props.back}
          id="backbtn"
          className="ui button primary"
        >
          Home
        </button>
      </div>
    );
  }
}
export default Back;
