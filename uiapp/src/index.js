import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bapp from './Bapp';
import Capp from './Capp';
import Dapp from './Dapp';
import Eapp from './Eapp';
import Fapp from './Fapp';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


ReactDOM.render(
   <Router>
     <Switch>

       <Route path="/reactnative" exact>

         <App/>

       </Route>

       <Route path="/ks-bootstrap" exact>

         <Bapp/>
         
        </Route>


       <Route path="/ks-coreui" exact>

        <Capp/>

      </Route>

      <Route path="/ks-css">

          <Dapp/>

      </Route>

      <Route path="/ks-w3css">

          <Eapp/>

      </Route>

      <Route path="/zoom">

          <Fapp/>

      </Route>

     </Switch>
   </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
