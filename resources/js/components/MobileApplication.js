import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';



class MobileApplication extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
             <HeaderTwo/>
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-md-12 menu_top_margin">
                            <h2 className="about_us_heading">Mobile Application</h2>
                            <img className="img-responsive post-img" src={`assets/images/services/app-aplication-large.png`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            Mobile as well as web-based applications are awesome tools for marketing your content to a populace, which is increasingly using their smart phones instead of their PCs to access the Internet. If your business is about selling a service or a product online, then you should definitely consider creating a mobile application as one of your priority content goals. You can create a native app built for specific platforms and devices such as Android & iOS.
                            One of the reasons why you should create mobile applications as part of your content marketing strategy is because today most people access the internet from their smartphones rather than their PCs. Having a mobile application for your business helps you capture this customer segment and drive more traffic and sales.
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <h2 className="about_us_heading text-center">Features</h2>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="img-responsive" style={{height:'52px',width:'64px'}} src={`assets/images/icon/Simplicity_in_design.png`} alt="trail_one"/>
                            <span className="feature">Simplicity in design</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Compliance_with_GDPR_standards.png`} alt="trail_one"/>
                            <span className="feature">Compliance with GDPR standards</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Ongoing_evolution.png`} alt="trail_one"/>
                            <span className="feature">Ongoing evolution</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Less_Keyboarding_and_More_Touch.png`} alt="trail_one"/>
                            <span className="feature">Less Keyboarding and More Touch</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="img-responsive" style={{height:'52px'}} src={`assets/images/icon/Applied_Data_Science_&_Machine_Learning.png`} alt="trail_one"/>
                            <span className="feature">Applied Data Science & Machine Learning</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Integration_of_Augmented_Reality.png`} alt="trail_one"/>
                            <span className="feature">Integration of Augmented Reality</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Cross-platform_coverage.png`} alt="trail_one"/>
                            <span className="feature">Cross-platform coverage</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Performance_is_the_key.png`} alt="trail_one"/>
                            <span className="feature">Performance is the key</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Robust_Security.png`} alt="trail_one"/>
                            <span className="feature">Security matters</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img  className="web_application_icon img-responsive" src={`assets/images/icon/Integration_with_bigger_ecosystems.png`} alt="trail_one"/>
                            <span className="feature">Integration with bigger ecosystems</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Interoperability_with_modern_connectivity_standard.png`} alt="trail_one"/>
                            <span className="feature">Interoperability with modern connectivity standard</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Focus_on_business-driven_solutions.png`} alt="trail_one"/>
                            <span className="feature">Focus on business-driven solutions</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img style={{width:'71px'}} className="web_application_icon img-responsive" src={`assets/images/icon/Social_Networking_Capabilities.png`} alt="trail_one"/>
                            <span className="feature">Social Networking Capabilities</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/The_Ability_to_Work_Offline.png`} alt="trail_one"/>
                            <span className="feature">The Ability to Work Offline</span>
                        </div>
                    </div>
                </div>
                <br/>
             <Footer/>
            </div>
        )
    }
}


export default MobileApplication;