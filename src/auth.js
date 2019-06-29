import React from "react"
import Main from "./components/Main"
class Auth extends React.Component{
    constructor(props){
        super(props)
        this.state = {isSignedIn:null,time:null}
    }


    
componentDidMount(){
         window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId:"534187182558-nf161duo33g5513hmq22urqtvcrndmke.apps.googleusercontent.com",
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(()=>{
                    this.setState({isSignedIn:this.auth.isSignedIn.get()})
                })
            })
    })
}

onsigninclick =()=>{
    window.gapi.auth2.getAuthInstance().signIn()
}
signOut =()=>{
    window.gapi.auth2.getAuthInstance().signOut()
}
renderauth = ()=>{
    if(this.state.isSignedIn === null){
        return null;
    }
if(this.state.isSignedIn===false){
    return(
            <div>
                <h1 className="ui header">
                You need to sign in in order to use our app
                </h1>
                <button onClick ={this.onsigninclick} className="ui red google button">
                <i className="google icon" />
                Sign in !
                </button>
            </div> 
    )
}
else{
    
    return(
        <div>
            <h1 className="ui header">Successfully signed in</h1>
           
            
            <Main
            tushar={(id) => {
              this.props.tu(id)
            }}/>
            <button onClick={this.signOut} className="ui red google button" >
            <i className="google icon" />
            Sign out
            </button>
        </div>
    )
}
}
    render(){
     
         return(
             <div>
                 {this.renderauth()}
             </div>
         )


}
}
export default Auth;