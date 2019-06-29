import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: null };
  }
  click = () => {
    window.localStorage.removeItem("notinterested");
    window.localStorage.removeItem("name");
    document.getElementById("backbtn").click();
  };
  render() {
    if (window.localStorage.getItem("name") || this.state.click) {
      return (
        <center>
          <div style={{ width: "100%", marginTop: "25px" }} class="ui card">
            <div class="image">
              <img
                style={{ height: "50px", width: "50px" }}
                src="https://scontent.fbho2-1.fna.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent.fbho2-1.fna&oh=e38194723b3fd414fc1d395535e6ff14&oe=5CCD40E9"
              />
            </div>
            <div class="content">
              <a class="header">{window.localStorage.getItem("name")}</a>
              <div class="meta" />
              <div class="description">
                Email : {window.localStorage.getItem("email")}
              </div>
            </div>
            <div class="extra content" />
          </div>
          <br />
          <button id="btn" className="ui button primary" onClick={this.click}>
            Reset Profile?
          </button>
        </center>
      );
    } else {
      return (
        <div>
          <center>
            <h1 className="ui header">
              You are Not Registered <br /> Please get Registered
            </h1>
            <button id="btn" className="ui button primary" onClick={this.click}>
              Register
            </button>
          </center>
        </div>
      );
    }
  }
}
export default Profile;
