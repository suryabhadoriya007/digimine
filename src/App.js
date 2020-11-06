import React from 'react';
//import logo from './logo.svg';
import './mmenu.min.css';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from './compoment/Home';
import About from './compoment/About';
import Portfolio from './compoment/Portfolio';
import Blog from './compoment/Blog';
import Blog_Details from './compoment/Blog_Details';
import ContactUs from './compoment/ContactUs';
import Paynow from './compoment/Paynow';
import Gallery from './compoment/Gallery';
import Android from './compoment/Android';
import Career from './compoment/Career';
import CareerDetails from './compoment/CareerDetails';
import Webdevelopment from './compoment/Webdevelopment';
import Iosdevelopment from './compoment/Iosdevelopment';
import Digitalmarketing from './compoment/Digitalmarketing';
import Seo from './compoment/Seo';
import Socialmedia from './compoment/Socialmedia';
import Contentmarket from './compoment/Contentmarket';
import Paidadvertising  from './compoment/Paidadvertising';
import Emailmarket  from './compoment/Emailmarket';

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
                <Switch>


                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/blog-details" component={Blog_Details} />
                <Route exact path="/ContactUs" component={ContactUs} />
                <Route exact path="/Paynow" component={Paynow} />
                <Route exact path="/Gallery" component={Gallery} />
                <Route exact path="/android-application" component={Android} />
                <Route exact path="/career" component={Career} />
                <Route exact path="/career-details" component={CareerDetails} />
                <Route exact path="/Web-development" component={Webdevelopment} />
                <Route exact path="/ios-development" component={Iosdevelopment} />
                <Route exact path="/digital-marketing" component={Digitalmarketing} />
                <Route exact path="/seo" component={Seo} />
                <Route exact path="/social-media" component={Socialmedia} />
                <Route exact path="/content-market" component={Contentmarket} />
                <Route exact path="/paid-advertising" component={Paidadvertising} />
                <Route exact path="/email-market" component={Emailmarket} />
                
                

                  </Switch>
                  </BrowserRouter>
    </div>
  );
}

export default App;
