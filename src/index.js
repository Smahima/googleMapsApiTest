import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './components/Search';



ReactDOM.render(

  <BrowserRouter>
     <BaseLayout>
       <Switch>
         <Route exact path="/" component={App} />
         <Route exact path="/search" component={Search} />
       </Switch>
     </BaseLayout>
   </BrowserRouter>

  , document.getElementById('root'));
