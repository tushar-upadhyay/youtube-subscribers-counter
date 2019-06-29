import React from "react";
import Options from "./components/options";
import Back from "./components/back";
var url1;
var url2;
var urlf1;
var urlf2;
var rep1;
var data = {
  baseURL: "https://www.googleapis.com/youtube/v3/", //search?part=snippet&q=",
  types: "search?part=snippet&q=",
  typel: "channels?part=statistics&id=",
  APIkey:
    "&type=channel&key=AIzaSyC2GEnpTx4pYgu3q7yKnx_9kwmcceCOcHI&maxResults=1"
};

class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.ironman = this.ironman.bind(this);
    this.state = {
      click: null,
      term1: null,
      term2: null,
      imgurl1: null,
      imgurl2: null,
      channelid1: null,
      channelid2: null,
      subs1: 0,
      subs2: 0,
      title1: null,
      title2: null,
      winner: null,
      looser: null,
      warning: null,
      time: 200,
      dynamic: this.props.id,
      dynamic1: null
    };
  }
  onchange1 = data => {
    this.setState({ term1: data.target.value });
  };
  onchange2 = data => {
    this.setState({ term2: data.target.value });
  };
  oncompare() {
    if (parseFloat(this.state.subs1) > parseFloat(this.state.subs2)) {
      this.setState({ winner: this.state.title1, looser: this.state.title2 });
    } else {
      this.setState({ winner: this.state.title2, looser: this.state.title1 });
    }
  }

  onsub = () => {
    this.setState({ dynamic1: 1 });
    if (this.state.term1 && this.state.term2) {
      this.setState({ click: true });
      url1 = data.baseURL + data.types + this.state.term1 + data.APIkey;

      fetch(url1)
        .then(res => res.json())
        .then(res => {
          this.setState({
            imgurl1: res.items[0].snippet.thumbnails.default.url
          });
          this.setState({
            channelid1: res.items[0].id.channelId,
            title1: res.items[0].snippet.channelTitle
          });
          urlf1 =
            data.baseURL + data.typel + this.state.channelid1 + data.APIkey;
          fetch(urlf1)
            .then(res => res.json())
            .then(res =>
              this.setState({
                subs1: res.items[0].statistics.subscriberCount
              })
            );
        });
      url2 = data.baseURL + data.types + this.state.term2 + data.APIkey;
      fetch(url2)
        .then(res => res.json())
        .then(res => {
          this.setState({
            imgurl2: res.items[0].snippet.thumbnails.default.url
          });
          this.setState({
            channelid2: res.items[0].id.channelId,
            title2: res.items[0].snippet.channelTitle
          });
          urlf2 =
            data.baseURL + data.typel + this.state.channelid2 + data.APIkey;
          fetch(urlf2)
            .then(res => res.json())
            .then(res => {
              this.setState({
                subs2: res.items[0].statistics.subscriberCount
              });
              this.oncompare();
            });
        });
      this.setState({ time: 100000 });
    } else {
      document.getElementById("label").style.visibility = "visible";
      this.setState({ warning: "Please Enter the above values.." });
    }
  };
  ironman() {
    this.setState({
      click: null,
      term1: null,
      term2: null,
      imgurl1: null,
      imgurl2: null,
      channelid1: null,
      channelid2: null,
      subs1: 0,
      subs2: 0,
      title1: null,
      title2: null,
      dynamic: null
    });
    clearInterval(rep1);
  }
  home = () => {
    //this.props.data();
    this.props.home();
  };
  dynamic = () => {
    this.setState({ time: 500 });
  };
  btnbackclick = () => {
    this.props.backclick();
  };
  onsubmain = () => {
    this.onsub();
    if (this.state.term1 && this.state.term2) {
      this.rep();
    }
  };
  rep = () => {
    if (this.state.dynamic === 1 && this.state.term1 && this.state.term2) {
      rep1 = setInterval(() => {
        this.onsub();
      }, 1000);
    }
  };
  render() {
    if (!this.state.click) {
      return (
        <div className="ui form" id="comp">
          <center>
            <input
              placeholder="Enter First user"
              onChange={this.onchange1}
              id="id1"
              className="field"
              type="text"
            />
            <br />
            <h1>VS</h1>
            <input
              placeholder="Enter Second User"
              onChange={this.onchange2}
              id="id"
              className="field"
              type="text"
            />
            <br />
            <button
              id="btn"
              className="ui button primary"
              onClick={this.onsubmain}
            >
              Submit
            </button>
          </center>

          <center>
            <h1
              id="label"
              className="ui label"
              style={{ color: "red", visibility: "hidden", marginTop: "20px" }}
              for="id1"
            >
              {this.state.warning}
            </h1>
          </center>
          <center>
            <button
              style={{ marginTop: "25px" }}
              id="btn"
              className="ui button green"
              onClick={this.btnbackclick}
            >
              Back
            </button>
          </center>
        </div>
      );
    } else if (this.state.subs1 && this.state.subs2) {
      return (
        <div>
          <div id="comparef">
            <div style={{ margin: "20px" }} id="compareitems">
              <img src={this.state.imgurl1} />
            </div>
            <div style={{ margin: "20px" }} id="compareitems">
              <img src={this.state.imgurl2} />
            </div>{" "}
            <div style={{ margin: "20px" }} id="compareitems">
              <p>
                SUBSCRIBERS:
                <br />
                <p style={{ fontSize: "25px" }}>{this.state.subs1}</p>
              </p>
            </div>
            <div style={{ margin: "20px" }} id="compareitems">
              <p>
                SUBSCRIBERS:
                <br />
                <p style={{ fontSize: "25px" }}>{this.state.subs2}</p>
              </p>
            </div>
          </div>
          <center>
            <h1 />
            <p>
              SUBSCRIBERS DIFFERENCE:
              <br />
            </p>
            <p style={{ fontSize: "25px" }}>
              {Math.abs(
                parseInt(this.state.subs1) - parseInt(this.state.subs2)
              )}
            </p>
          </center>
          <Options
            data={{
              back: this.ironman,
              home: this.home,
              dynamic: this.dynamic
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <div class="ui segment">
            <div id="loader" class="ui active dimmer">
              <div class="ui text loader">Comparing......</div>
            </div>
            <p />
          </div>
        </div>
      );
    }
  }
}
export default Compare;
