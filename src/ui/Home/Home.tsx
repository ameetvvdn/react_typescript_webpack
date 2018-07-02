import React, { Component } from 'react';

import logo from '../../resources/images/logo.png';
import PetPage from '../Pet/PetPage';

class Home extends Component<{}, {}> {
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

export default Home;
