import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Api from './pages/Api';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/api" exact component={Api} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;