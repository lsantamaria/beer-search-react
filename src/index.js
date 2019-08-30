import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render((<App />), document.getElementById('root'));

// We could use a router for the navigation, but not needed for the scope of this exercise
{/*<Router history={browserHistory}>*/}
  {/*<Route path="/" component={App}>*/}
    {/*<IndexRoute component={SearchView}/>*/}
    {/*<Route path="/search" component={Search}/>*/}
    {/*<Route path="/results" component={Results}/>*/}
  {/*</Route>*/}
{/*</Router>*/}

serviceWorker.unregister();
