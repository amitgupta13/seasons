import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props){
  //     super(props);

  //     this.state = {
  //         lat:null,
  //         errMessage:''
  //     }

  // }

  //babel will still convert below code as code above using constructor
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  renderContent = () => {
    if (this.state.errMessage && !this.state.lat)
      return <div>Error: {this.state.errMessage}</div>;
    if (!this.state.errMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} />;
    return <Spinner message="Please Accept Location Request" />;
  };

  render() {
    return (
      <div style={{ border: "10px solid red" }}>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
