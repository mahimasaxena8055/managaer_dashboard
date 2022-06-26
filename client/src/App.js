import React, { Component } from 'react';
  import Routes from './Routes/Routes';
  // import landing from "../../login/app";

class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <app/>    */}
         <Routes />    
      </div>
    );
  }
}

export default App;
