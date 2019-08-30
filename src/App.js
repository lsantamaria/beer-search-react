import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './App.css';
import Search from "./pages/Search";

function App() {
  return (
      <Provider store={store} >
        <PersistGate persistor={persistor}>
          <Search />
        </PersistGate>
      </Provider>
  );
}

export default App;
