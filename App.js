import React from 'react';
import { Provider } from 'react-redux';
import { store } from './App/redux/store';

import RootContainer
  from './App/RootContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootContainer/>
      </Provider>
    );
  }
}

export default App;
