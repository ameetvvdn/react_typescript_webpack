import * as React from 'react';
import './App.less';

import logo from './logo.png';
import PetPage from './PetPage';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
          <p>Biz Chart (Relay-Graphql) POC</p>
          <PetPage />
      </div>
    );
  }
}

export default App;
