import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Contact from './Contact';
import NewContactFrom from './NewContactFrom';
import EditContactFrom from './EditContactFrom';

const Router = () => {
    return ( 
        <Switch>
            <Route path="/" exact  component={Contact}/>
            <Route path="/addcontact" exact component={NewContactFrom} />
            <Route path="/editcontact/:id" exact component={EditContactFrom} />
        </Switch>
     );
}
 
export default Router;