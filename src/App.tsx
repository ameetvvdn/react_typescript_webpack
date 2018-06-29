import * as React from 'react';
import UserListPage from './components/UserListPage'

import './App.less';

import logo from './logo.png';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <p className='App-intro'>
          <UserListPage />
        </p>
      </div>
    );
  }
}

export default App;
