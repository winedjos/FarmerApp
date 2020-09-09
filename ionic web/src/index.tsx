import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import store from './store';
import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';


//import { IonicImageLoader } from 'ionic-image-loader';


//IonicImageLoader.forRoot();
const history = createBrowserHistory();
Plugins.GoogleAuth.signIn();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);
serviceWorker.unregister(history);
