import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Api from './pages/Api';
import Canvas from './pages/Canvas';
import Diversificados from './pages/Diversificados';

import Error404 from './pages/Error404';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/api" exact component={Api} />
                <Route path="/canvas" exact component={Canvas} />
                <Route path="/diversos" exact component={Diversificados} />
                <Route path="*" exact component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;