import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <div>
            <app-accounts></app-accounts>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <app-payments></app-payments>
          </div>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );

}

export default App;
