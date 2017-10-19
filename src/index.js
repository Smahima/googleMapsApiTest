import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import BaseLayout from './components/BaseLayout'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render(

  <BrowserRouter>
     <BaseLayout>
       <Switch>
         <Route exact path="/" component={App} />
       </Switch>
     </BaseLayout>
   </BrowserRouter>

  , document.getElementById('root'));
