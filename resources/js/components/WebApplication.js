import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';

class WebApplication extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <HeaderTwo/>
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-md-12 menu_top_margin">
                            <h2 className="about_us_heading">Web Application</h2>
                            <img className="img-responsive post-img" src={`assets/images/services/web-application-large.png`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            Web-based applications, which are built to serve a specific use and customer base; and can be accessed from desktops, laptops, and even mobiles.You can create web-based applications that are mobile responsive and market them on specific market places such as world-wide. You can also host these web-based applications on your website to help your customers tackle a problem or complete a task. For instance, let’s assume your company sells insurance policies. You could create a custom application such as a tax calculator, which will calculate the tax savings of users who want to take a certain policy. Customers can download these applications and use them when they want, with or without an internet connection. You need to develop a web-based application if it helps your customers complete a task they perform on a daily basis. Web-based applications bring in new customers onboard as they sign-up or download these applications. It also helps in retaining existing customers, while positioning you as a thought leader in the industry.
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <h2 className="about_us_heading text-center">Features</h2>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/mobile_frienliness.png`} alt="trail_one"/>
                            <span className="feature">Mobile-friendliness</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/quick_loading_times.png`} alt="trail_one"/>
                            <span className="feature">Quick loading times</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/search_engine_optimized.png`} alt="trail_one"/>
                            <span className="feature">Search engine optimised</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Analytics-enabled.png`} alt="trail_one"/>
                            <span className="feature">Analytics-enabled</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="img-responsive" style={{height:'52px'}} src={`assets/images/icon/Built_for_conversion.png`} alt="trail_one"/>
                            <span className="feature">Built for conversion</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Content_management_enabled.png`} alt="trail_one"/>
                            <span className="feature">Content management enabled</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Social_media.png`} alt="trail_one"/>
                            <span className="feature">Social media</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Set_up_email_marketing.png`} alt="trail_one"/>
                            <span className="feature">Set up email marketing</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Robust_Security.png`} alt="trail_one"/>
                            <span className="feature">Robust Security</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img  style={{width:'83px'}} className="web_application_icon img-responsive" src={`assets/images/icon/Progressive_Web_Apps.png`} alt="trail_one"/>
                            <span className="feature">Progressive Web Apps</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Quality_Web_Content.png`} alt="trail_one"/>
                            <span className="feature">Quality Web Content</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="img-responsive" style={{height:'52px',width:'64px'}} src={`assets/images/icon/Simplicity_in_design.png`} alt="trail_one"/>
                            <span className="feature">Simple and Professional Web Design</span>
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}

export default WebApplication;