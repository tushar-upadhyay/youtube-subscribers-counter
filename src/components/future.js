import React from "react";
import future from "./data";
var data = [];
var newdata;
var initial;
var final;
class Future extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      show: "Initialising Prediction Engine....",
      click: null,
      term: null,
      img: null,
      id: null,
      subs: null,
      subspredict: null
    };
    this.onsub = this.onsub.bind(this);
  }
  onchange = e => {
    this.setState({ term: e.target.value });
  };
  count = () => {
    var url1 = future(this.state.term).url1;
    fetch(url1)
      .then(res => res.json())
      .then(res => {
        this.setState({
          img: res.items[0].snippet.thumbnails.default.url,
          id: res.items[0].id.channelId,
          title: res.items[0].snippet.title
        });
        var url2 = future(url1, this.state.id).url2;

        fetch(url2)
          .then(res => res.json())
          .then(res => {
            this.setState({ subs: res.items[0].statistics.subscriberCount });
            data.push(this.state.subs);
            //console.log(data);
          });
      })
      .catch(err => console.log(err));
  };
  onsub = e => {
    e.preventDefault();
    this.setState({ click: true });
    this.count();
  };
  predict = () => {
    this.setState({ click: null });
    var tushar = setInterval(() => this.count(), 500);
    setTimeout(() => this.setState({ show: "Compiling Results....." }), 15000);
    setTimeout(() => {
      clearInterval(tushar);

      //this.setState({click:true})
      initial = data[0];
      newdata = data.sort((a, b) => {
        return b - a;
      });

      final = newdata[0];
      this.setState({ subspredict: parseInt(final - initial) * 60 * 24 });
    }, 30000);
  };
  render() {
    if (!this.state.img && !this.state.click) {
      return (
        <div className="ui form" id="comp">
          <form onSubmit={this.onsub}>
            <center>
              <label
                style={{ marginTop: "25px" }}
                className="ui green label"
                for="futureform"
              >
                FUTURE PREDICTIONS
              </label>
              <p>Enter the channel name to predict its future subscribers</p>
              <input
                placeholder="Enter user"
                id="futureform"
                className="field"
                type="text"
                onChange={this.onchange}
              />
              <br />
              <input
                style={{ marginTop: "20px" }}
                className="ui button primary"
                type="submit"
              />
            </center>
          </form>
        </div>
      );
    } else if (this.state.img && this.state.click) {
      return (
        <div>
          <center>
            <img
              style={{ marginTop: "15px" }}
              className="ui image"
              src={this.state.img}
            />
            <button
              value="Initialise Prediction Engine!"
              style={{ marginTop: "20px" }}
              className="ui button primary"
              onClick={this.predict}
            >
              Initialise Prediction Engine!
            </button>
            <h1 style={{ marginTop: "25px" }}>
              Note:You have to wait for 30 seconds to Predict the future
              Subscribers{" "}
            </h1>
          </center>
        </div>
      );
    } else if (this.state.subspredict) {
      return (
        <div>
          <center>
            <h1>{this.state.title}</h1>
            <p>
              FOLLOWING RESULTS IS OBTAINED FROM OUR ENGINE:
              <br />
            </p>
            <p>daily subscribers : {this.state.subspredict}</p>
          </center>
        </div>
      );
    } else {
      return (
        <div class="ui segment">
          <div id="loader" class="ui active dimmer">
            <div class="ui text loader">{this.state.show}</div>
          </div>
          <p />
        </div>
      );
    }
  }
}
export default Future;
