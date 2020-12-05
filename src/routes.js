import React from "react";
import {
  Switch,
  Route, 
} from "react-router-dom";

import  {
  Home, 
  RequestBook, 
  ViewBook, 
  AddBook,
  Page404
} from './pages';

const Routes = ( ) => (
    <Switch>
      <Route exact path="/" component={Home}/> 
      <Route path="/book/request" component={RequestBook}/> 
      <Route path="/book/view" component={ViewBook}/>
      <Route path="/book/add" component={AddBook}/>

      <Route path='*' exact  component={Page404} />
    </Switch>
);

export default Routes;