import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {DatasetLandingPage} from "./pages/DatasetLandingPage";
import {SearchPage} from "./pages/SearchPage";
import {Homepage} from "./pages/Homepage";
import {AreaProfilePage} from "./pages/AreaProfilePage";


function App() {
    // TODO switch over to using this style, to make prod deployment cleaner.
    //<Router basename={'/subdirectory'}>
    //   <Route path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/dp-census-alpha-frontend-poc/dataset-landing/:name"
                           render={(props) => <DatasetLandingPage {...props}/>}/>
                    <Route path="/dp-census-alpha-frontend-poc/search/" component={SearchPage}/>
                    <Route path="/dp-census-alpha-frontend-poc/area-profile/:id" component={AreaProfilePage}/>
                    <Route path="/dp-census-alpha-frontend-poc/" component={Homepage} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
