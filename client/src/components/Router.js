import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Contact from './Contact';
import NewContactFrom from './NewContactFrom';

const Router = () => {
    return ( 
        <Switch>
            <Route path="/" exact  component={Contact}/>
            <Route path="/addcontact" exact component={NewContactFrom} />
        </Switch>
     );
}
 
export default Router;