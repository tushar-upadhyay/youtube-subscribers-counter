import React from "react";
// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCqwUrj10mAEsqezcItqvwEw&key=AIzaSyC2GEnpTx4pYgu3q7yKnx_9kwmcceCOcHI
var mainurl;
var forlive;
var inter;
var uname = null;
var newuname;
var data = {
  baseURL: "https://www.googleapis.com/youtube/v3/", //search?part=snippet&q=",
  types: "search?part=snippet&q=",
  typel: "channels?part=statistics&id=",
  APIkey:
    "&type=channel&key=AIzaSyC2GEnpTx4pYgu3q7yKnx_9kwmcceCOcHI&maxResults=1"
};
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newnote: "Result will be shown here...",
      term: null,
      urls: null,
      cid: null,
      subs: null,
      note: null,
      warning: "Please Enter Channel Name"
    };
    this.onget = this.onget.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onsub = this.onsub.bind(this);
  }
  onclick() {
    inter = setInterval(() => {
      newuname = uname.toUpperCase();
      forlive = data.baseURL + data.typel + this.state.cid + data.APIkey;
      fetch(forlive)
        .then(res => res.json())
        .then(res =>
          this.setState({
            subs: res.items[0].statistics.subscriberCount,
            note: `LIVE SUBSCRIBERS COUNT `,
            newnote: null
          })
        )
        .catch(err => console.log(err));
    }, 1000);
  }
  onsub(e) {
    e.preventDefault();
    if (this.state.term) {
      mainurl = data.baseURL + data.types + this.state.term + data.APIkey;
      forlive = fetch(mainurl)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            urls: res.items[0].snippet.thumbnails.default.url
          });
          this.setState({
            newnote: "CLICK ON THE IMAGE TO GET DYNAMIC SUBSCRIBERS COUNT",
            cid: res.items[0].id.channelId
          });
        })
        .catch(err => console.log(err));
    } else {
      document.getElementById("warning").style.visibility = "visible";
    }
  }
  onget(e) {
    this.setState({ term: e.target.value });
    uname = e.target.value;
    document.getElementById("warning").style.visibility = "hidden";
  }
  render() {
    return (
      <div className="App">
        <form className="ui form" onSubmit={this.onsub}>
          <label className="ui inverted green huge header" htmlFor="id">
            Youtube Live Subscribers Counter{" "}
          </label>
          <br />
          <br />
          <input
            id="id"
            type="text"
            placeholder="NAME OF CHANNEL"
            onChange={this.onget}
          />
          <br />
          <button type="submit" id="btn" class="ui primary button">
            SUBMIT
          </button>
        </form>
        <p
          id="warning"
          style={{ visibility: "hidden" }}
          className="ui label red"
        >
          {this.state.warning}
        </p>
        <div class="" id="imgs">
          <img onClick={this.onclick} src={this.state.urls} />
        </div>
        <center>
          <div class="ui card">
            <p>{this.state.newnote}</p>
            <h1 id="cards">
              {this.state.note}
              <br /> {this.state.subs}
            </h1>
          </div>
        </center>

        <p class="para">
          ABOUT THE APP <br />
          This App is Backend Supported by React <br />
          This App uses Youtube Data v3 API for extraction of data <br />
          You can also Install this App as an Android Application by Selecting
          "ADD TO HOMESCREEN" <br />
          This is Possible because of React which Natively supports Android
          Architecture
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    );
  }
}
export default Count;
