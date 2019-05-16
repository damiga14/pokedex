import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Gen from './pages/Gen'
// import Gen1 from './pages/Gen1'
// import Gen2 from './pages/Gen2'
// import Gen3 from './pages/Gen3'
// import Gen4 from './pages/Gen4'
// import Gen5 from './pages/Gen5'
// import Gen6 from './pages/Gen6'
// import Gen7 from './pages/Gen7'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component = {Home}/>
                <Route path = '/Gen/:id' component = {Gen}/>

                {/* <Route path='/Gen1' component = {Gen1}/>
                <Route path='/Gen2' component = {Gen2}/>
                <Route path='/Gen3' component = {Gen3}/>
                <Route path='/Gen4' component = {Gen4}/>
                <Route path='/Gen5' component = {Gen5}/>
                <Route path='/Gen6' component = {Gen6}/>
                <Route path='/Gen7' component = {Gen7}/> */}
            </Switch>
        </BrowserRouter>

        
    )
}

export default Routes