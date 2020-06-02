import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class CustomSoftware extends Component{
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
                            <h2 className="about_us_heading">Custom Software</h2>
                            <img className="img-responsive post-img" src={`assets/images/software/custom_software.png`} alt="web_application"/>
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
                <Footer/>
            </div>
        )
    }
}


export default CustomSoftware;