import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {DatasetLandingPage} from "./pages/DatasetLandingPage";
import {SearchPage} from "./pages/SearchPage";
import {Homepage} from "./pages/Homepage";


function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/dp-census-alpha-frontend-poc/dataset-landing/:name" component={DatasetLandingPage}/>
            <Route path="/dp-census-alpha-frontend-poc/search/" component={SearchPage}/>
            <Route path="/dp-census-alpha-frontend-poc/" component={Homepage} exact/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
