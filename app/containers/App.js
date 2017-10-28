/**
 * App Component
 */

'use strict';

import {remote, ipcRenderer} from 'electron';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store';
import {HashRouter as Router, Route} from 'react-router-dom';
import SidebarContainer from './SidebarContainer';
import AppHeader from '../common/AppHeader';
import PackagesContainer from './PackagesContainer';
import PackageAnalyzeContainer from './PackageAnalyzeContainer';

const store = configureStore();
const rootEl = document.getElementById('app-content');

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <AppHeader />
        <div className="dashboard">
          <SidebarContainer/>
          <div className="main">
            <div className="main__cont">
              <Router>
                <div>
                  <Route exact path="/" component={PackagesContainer}/>
                  <Route path="/analyze" component={PackageAnalyzeContainer}/>
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;