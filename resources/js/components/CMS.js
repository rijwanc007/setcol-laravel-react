import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';



class CMS extends Component{
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
                            <h2 className="about_us_heading">CMS</h2>
                            <img className="img-responsive post-img"  src={`assets/images/software/cms.jpg`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            WordPress can be referred as an open source Content Management System (CMS), which allows the users to build dynamic websites and blog. WordPress is the most popular blogging system on the web that allows updating, customizing and managing the website from its back-end CMS and components.
                            The Content Management System (CMS) is a software that stores all the data liketext, photos, music, documents etc. and is made available on your website. It helps to edit, publish and modify the content of the website.
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}


export default CMS;