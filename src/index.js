import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import { store, persistor } from './store';

export default class src extends Component {
  render() {
    return (
        <Provider 
          store={ store }
        >
          <PersistGate
            loading={ null }
            persistor={ persistor }
          >
            <StatusBar 
              backgroundColor="#b71c1c"
              barStyle="light-content"
            />
            <Routes />
          </PersistGate>
        </Provider>
    );
  }
}
