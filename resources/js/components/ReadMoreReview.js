import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';
import {Link} from "react-router-dom";



class ReadMoreReview extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <HeaderTwo/>
                <div className="container">
                        <br/><br/>
                        <div className="row menu_top_margin">
                            <div className="col-md-12">
                            <h3 className="about_us_heading text-center">Our Client Says About Us</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="row ">
                            <div className="col-md-4 text-center">
                                <img className="review_img img-responsive" src={`assets/images/review/model_one.jpg`} alt="model_one"/>
                            </div>
                            <div className="col-md-8">
                                <div className="about_us_text">
                                    SETCOLBD gives the comapny better business intelligence when we're talking with our vendors and customers. It's an accurate ERP management system. SETCOLBD is the most efficient, affordable & customized ERP System provider in the market with great support.
                                    <div>Website : <span><a href="http://www.socialodds.online/" target="_blank">http://www.socialodds.online/</a></span></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img className="review_img img-responsive" src={`assets/images/review/needboat.png`} alt="model_one"/>
                            </div>
                            <div className="col-md-8">
                                <div className="about_us_text">
                                    SETCOLBD is incredible to work with. They have great communication and superb insights into Ecommerce. They went above and beyond to make sure I was completely satisfied with our new website. They completed the job on time and handled all the projects expeditiously. I love his attention to detail. The finished product blow my mind. I highly recommend SETCOLBD.
                                    <div>Website : <span><a href="https://needboat.com/" target="_blank">https://needboat.com/</a></span></div>
                                </div>
                            </div>
                        </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}


export default ReadMoreReview;