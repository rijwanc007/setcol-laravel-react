import React,{ Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import WebApplication from './WebApplication';
import MobileApplication from './MobileApplication';
import SoftwareTesting from './SoftwareTesting';
import GraphicsSolution from './GraphicsSolution';
import SeoDigitalMarketing from './SeoDigitalMarketing';
import Bulk from './Bulk';
import CustomSoftware from './CustomSoftware';
import CloudBasedSoftware from './CloudBasedSoftware';
import ECommerce from './ECommerce';
import ERP from './ERP';
import DesktopApplication from './DesktopApplication';
import CMS from './CMS';
import Career from './Career';
import ContactUs from './ContactUs';
import ReadMoreReview from './ReadMoreReview';
import * as serviceWorker from './serviceWorker';
class LandingPage extends Component{
     constructor(props){
         super(props);
     }
     render(){
         return(
             <div>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/web_application" component={WebApplication}/>
                      <Route path="/mobile_application" component={MobileApplication}/>
                      <Route path="/software_testing" component={SoftwareTesting}/>
                      <Route path="/graphics_solution" component={GraphicsSolution}/>
                      <Route path="/seo_digital_marketing" component={SeoDigitalMarketing}/>
                      <Route path="/bulk_sms" component={Bulk}/>
                      <Route path="/custom_software" component={CustomSoftware}/>
                      <Route path="/cloud_based_software" component={CloudBasedSoftware}/>
                      <Route path="/e_commerce" component={ECommerce}/>
                      <Route path="/erp" component={ERP}/>
                      <Route path="/desktop_application" component={DesktopApplication}/>
                      <Route path="/cms" component={CMS}/>
                      <Route path="/read_more_review" component={ReadMoreReview}/>
                      <Route path="/career" component={Career}/>
                      <Route path="/contact_us" component={ContactUs}/>
                  </Switch>
             </div>
         )
     }
}
function LandingPageRouting(){
    return(
        <div>
            <Router>
                <Route component={LandingPage}/>
            </Router>
        </div>
    )
}
render(<LandingPageRouting/>,document.getElementById('root'));
serviceWorker.unregister();
