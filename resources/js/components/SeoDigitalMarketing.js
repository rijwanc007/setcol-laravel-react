import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class SeoDigitalMarketing extends Component{
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
                            <h2 className="about_us_heading">SEO & Digital Marketing</h2>
                            <img className="img-responsive post-img" src={`assets/images/services/seo-digital-banner-large.png`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.
                            A content marketer, for example, can create a series of blog posts that serve to generate leads from a new ebook the business recently created. The company's social media marketer might then help promote these blog posts through paid and organic posts on the business's social media accounts. Perhaps the email marketer creates an email campaign to send those who download the ebook more information on the company. We'll talk more about these specific digital marketers in a minute.
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}


export default SeoDigitalMarketing;