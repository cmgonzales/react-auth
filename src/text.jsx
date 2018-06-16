import React, { Component } from 'react';

function activate(e){

console.log("clicked");

}

class App extends Component {
  render() {
    return (
      <div>
     <input type="text" value= {this.state.value} onChange={this.handleChange}/>
     <button onClick={activate}>sumbit</button>
       
      </div>
    );
  }
}

export default App;

