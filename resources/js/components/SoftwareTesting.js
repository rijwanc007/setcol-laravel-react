import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class SoftwareTesting extends Component{
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
                            <h2 className="about_us_heading">QA & Testing</h2>
                            <img className="img-responsive post-img" src={`assets/images/services/software-testing-large.png`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            Testing refers as the process of evaluating a system or its component’s with the intent to find whether it satisfies the specified requirements or not.
                            Testing execute a system in order to identify any gaps, errors or missing requirements.
                            Test Strategy is also known as test approach defines how testing would be carried out. Test approach has two techniques:
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}
export default SoftwareTesting;