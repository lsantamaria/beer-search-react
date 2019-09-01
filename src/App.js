import React from 'react';
import { Provider } from 'react-redux';
import { store} from './redux/store';
import Search from "./pages/SearchContainer";

function App() {
  return (
      <Provider store={store} >
          <Search />
      </Provider>
  );
}
export default App;
