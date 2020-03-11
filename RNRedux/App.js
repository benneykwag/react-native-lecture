import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Books from './src/Books';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Books />
      </Provider>
    );
  }
}
