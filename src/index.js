import React from "react";
import ReactDOM from "react-dom";
import Count from "./Count";
import "./styles.css";

import Header from "./components/header";
import Compare from "./compare";
import Back from "./components/back";
import Future from "./components/future";
import AfterCompare from "./components/compare1";
import Auth from "./auth"
//import newApp from "./App"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null, clickid: null };
  }

  render() {
    if (!this.state.clickid) {
      return (
        <div>
          <Header />
          <center>
          <Auth tu={(id)=>{
            this.setState({clickid: id})
          }} />
          {/* <Main
            tushar={id => {
              this.setState({ clickid: id });
            }} */}
          </center>
        </div>
      );
    } else if (this.state.clickid === 1) {
      return (
        <div>
          <Count />
          <Back back={() => this.setState({ clickid: null })} />
        </div>
      );
    }
    //  else if (this.state.clickid === 2) {
    //   return (
    //     <div>
    //       <Header />
    //       <Compare home={() => this.setState({ clickid: null })} />
    //       <Back back={() => this.setState({ clickid: null })} />
    //     </div>
    //   );
    // }
    else if (this.state.clickid === 2) {
      return (
        <div>
          <Header />
          <AfterCompare />
          <Back back={() => this.setState({ clickid: null })} />
        </div>
      );
    } else if (this.state.clickid === 3) {
      return (
        <div>
          <Header />
          <Future />
          <Back back={() => this.setState({ clickid: null })} />
        </div>
      );
    } else if (this.state.clickid === 4) {
      return (
        <div>
          <Header />
          <center>
            <p style={{ marginTop: "40px" }}>
              <strong>
                ABOUT THE APP <br />
                This App's Backend is Powered by React <br />
                The App uses Youtube Data v3 API for extraction of data <br />
                You can also Install this App as an Android Application by
                Selecting "ADD TO HOMESCREEN" <br />
                This is Possible because of React which Natively supports
                Android Architecture
              </strong>
            </p>
          </center>
          <Back back={() => this.setState({ clickid: null })} />
        </div>
      );
    }
    else if(this.state.clickid===6){
      return(
        <center>
        <div class="ui card">
  <div class="image">
    <img src={window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getImageUrl()} />
  </div>
  <div class="content">
    <a class="header">{window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().ig}</a>
   
    <div class="description">
      Email : {window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail()}
    </div>
  </div>
  <div class="extra content">
   
  </div>
  <Back back={() => this.setState({ clickid: null })} />
</div>
</center>
      )
    }
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
