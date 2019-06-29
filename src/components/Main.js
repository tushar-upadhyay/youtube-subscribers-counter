import React from "react";
import "./styles.css";

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  state = {isSignedIn:false}
  btn1click = () => {
    this.props.tushar(1);
  };
  btn2click = () => {
    this.props.tushar(2);
  };
  btn3click = () => {
    this.props.tushar(3);
  };
  btn4click = () => {
    this.props.tushar(4);
  };
  btn6click =()=>{
    this.props.tushar(6)
  }
  btn5click = () => {};
  token =(e)=>{
    this.setState({isSignedIn:e})
  }
  render() {
    
    return (
      <center>
        <div id="div1">
          <p>Please Select One of the options</p>
          <button
            id="btn"
            className="ui button primary"
            onClick={this.btn1click}
          >
            Live Subscribers
          </button>
          <br />
          <button
            id="btn"
            className="ui button primary"
            onClick={this.btn2click}
          >
            Compare Youtubers
          </button>
          <br />
          <button
            id="btn"
            className="ui button primary"
            onClick={this.btn3click}
          >
            Future Projections
          </button>
          <br />
          <button
            id="btn"
            className="ui button primary"
            onClick={this.btn4click}
          >
            About US
          </button>
          <br />
          <a href="whatsapp://send?text=Hey! I am using this amazing app which tells about youtubers ...get now https://q5652kr49.codesandbox.io/?">
            <button
              id="btn"
              className="ui button primary"
              onClick={this.btn5click}
            >
              Share via whatsapp!
            </button>
          </a>
          <br />
          <button id ="btn" onClick ={()=>window.gapi.auth2.getAuthInstance().signOut()} className="ui red google button">
          <i className="google icon" />
          Sign out
          </button>
          <button
              id="btn"
              className="ui button primary"
              onClick={this.btn6click}
            >
              My Profile
            </button>
        </div>
        <center>
          <div id="foot">
            <strong>A product by Tushar Upadhyay</strong>
          </div>
        </center>
      </center>
    );
  
  }
}
export default Main;
