import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



class App extends Component {
  render() {
    var logoImg = '/logo.png'
    return (
      <div className="header"><img src={logoImg} /></div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('root'),
);


export default App;
