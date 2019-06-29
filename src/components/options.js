import React from "react";
class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <center>
          <br />

          <button
            onClick={this.props.data.back}
            id="btn"
            className="ui button primary"
          >
            Compare Again
          </button>
          <br />
        </center>
      </div>
    );
  }
}
export default Options;
