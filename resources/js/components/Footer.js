import React,{ Component } from 'react';
import {Link} from "react-router-dom";
import { ToastsStore} from 'react-toasts';
import axios from 'axios';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            subscribe : ''
        };
        this.subscriberFormValue = this.subscriberFormValue.bind(this);
        this.handleSubscriberSubmit = this.handleSubscriberSubmit.bind(this);
        this.notificationShow = this.notificationShow.bind(this);
    }
    subscriberFormValue(e){
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubscriberSubmit(e){
        e.preventDefault();
        const subscriber = {
            subscriber : this.state.subscribe
        };
        axios.post('/api/subscriber',subscriber).then(this.notificationShow);
    }
    notificationShow(){
        this.refs.subscriberForm.reset();
        ToastsStore.success('You Are Subscribe These Site Successfully');
    }
    render(){
        return(
            <div>
                <div className="footer_background_color">
                   <div className="container-fluid">
                    <br/>
                    <div className="row">
                        <div className="col-md-3">
                               <h5 className="about_us_heading text-center">Services Quick Link</h5>
                               <div><Link className="arrow_link" to="/web_application"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Web Application</span></Link></div>
                               <div><Link className="arrow_link" to="/mobile_application"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Mobile Application</span></Link></div>
                               <div><Link className="arrow_link" to="/software_testing"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Software Testing</span></Link></div>
                               <div><Link className="arrow_link" to="/graphics_solution"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Graphics Solution</span></Link></div>
                               <div><Link className="arrow_link" to="/seo_digital_marketing"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>SEO & Digital Marketing</span></Link></div>
                               <div><Link className="arrow_link" to="/bulk_sms"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Bulk SMS</span></Link></div>
                        </div>
                        <div className="col-md-3">
                               <h5 className="about_us_heading text-center">Software Quick Link</h5>
                               <div><Link className="arrow_link" to="/custom_software"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Custom Software</span></Link></div>
                               <div><Link className="arrow_link" to="/cloud_based_software"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Cloud Based Software</span></Link></div>
                               <div><Link className="arrow_link" to="/e_commerce"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>E-Commerce</span></Link></div>
                               <div><Link className="arrow_link" to="/erp"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>ERP Management Software</span></Link></div>
                               <div><Link className="arrow_link" to="/desktop_application"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>Desktop Application</span></Link></div>
                               <div><Link className="arrow_link" to="/cms"><img className="arrow_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/><span>CMS</span></Link></div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                               <h5 className="about_us_heading text-center">Address</h5>
                               <div><img className="address_icon" src={`assets/images/icon/address_one.png`} alt="arrow"/><span className="arrow_link">Address: 31/1 Purana Paltan, Sharif Complex(10th floor), Dhaka-1000</span></div>
                               <div><img className="address_icon" src={`assets/images/icon/phone.png`} alt="arrow"/><span className="arrow_link">Phone: +88-0255112226, +88-01401157050</span></div>
                               <div><img className="address_icon" src={`assets/images/icon/email.png`} alt="arrow"/><span className="arrow_link">Email: info@setcolbd.com</span></div>
                               <div><a className="arrow_link" href="http://setcolbd.com/" target="_blank"><img className="address_icon" src={`assets/images/icon/website.jpg`} alt="arrow"/><span className="arrow_link">Website: www.setcolbd.com</span></a></div>
                               <br/>
                            <form ref="subscriberForm" action="" method="post" onSubmit={this.handleSubscriberSubmit}>
                                <input type="email" className="subscribe_input_field" id="subscribe" name="subscribe" required onChange={this.subscriberFormValue} placeholder="Please Type Your Email To Subscribe These Site"/>
                                <button className="btn btn-info subscribe_button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <img src={`assets/images/icon/setcolbd_two.png`} alt="logo"/>
                        </div>
                        <div className="col-md-12">
                            <a href="https://www.facebook.com/setcolbd/"  target="_blank"><img className="social_icon_two" src={`assets/images/icon/facebook.png`} alt="facebook"/></a>
                            <a href="https://www.instagram.com/setcolbd/" target="_blank"><img className="social_icon_two" src={`assets/images/icon/instagram.png`} alt="instagram"/></a>
                            <a href="https://www.linkedin.com/company/setcolbd/" target="_blank"><img className="social_icon_two" src={`assets/images/icon/linkedin.png`} alt="linkedin"/></a>
                            <a href="https://www.twitter.com/setcolbd/"  target="_blank"><img className="social_icon_two" src={`assets/images/icon/twiter.png`} alt="twiter"/></a>
                            <a href="https://www.pinterest.com/setcolbd/" target="_blank"><img className="social_icon_two" src={`assets/images/icon/pinterest.png`} alt="youtube"/></a>
                        </div>
                        <div className="col-md-12 text-center about_us_text">
                            © 2017 SETCOLBD :: Skies Engineering & Technologies Company Ltd.
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}


export default Footer;