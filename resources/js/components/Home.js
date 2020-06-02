import React,{ Component } from 'react';
import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WOW from "wowjs";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Header from './Header';
import Footer from './Footer';

class Home extends Component{
        constructor(props){
            super(props);
            this.state = {
                name: '',
                email: '',
                message: '',
            };
            this.contactFormValue = this.contactFormValue.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.contactNotificationShow = this.contactNotificationShow.bind(this);
        }
        componentDidMount() {
            const wow = new WOW.WOW();
            wow.init();
        }

    contactFormValue(e){
            e.preventDefault();
            this.setState({
                [e.target.name] : e.target.value,
            })
        }
        handleSubmit(e){
            e.preventDefault();
            const information = {
                name : this.state.name,
                email : this.state.email,
                message : this.state.message
            };
            axios.post('/api/contact',information).then(this.contactNotificationShow);
        }
        contactNotificationShow(){
            this.refs.contactForm.reset();
            ToastsStore.success('Your Message Send Us SuccessFully');
        }
    render(){
            return(
                   <div>
                      <Header/>
                       <div className="container">
                           <div className="row">
                               <div className="col-sm-12 col-md-4 text-center">
                                   <div className="container_card">
                                       <div className="container-card">
                                           <div className="container-card-img">
                                               <img className="about_us_image img-responsive" src={`assets/images/icon/setcolbd.png`} alt="about_us"/>
                                           </div>
                                           <span></span>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-1"></div>
                               <br/>
                               <div className="col-sm--12 col-md-7">
                                   <h3 className="about_us_heading text-center">About Us</h3>
                                   <div className="about_us_text text-center">
                                       The software development industry has room for growth as there is considerable demand in this industry with more businesses adopting software programs that will allow for improved efficiency and lower operating costs; this was so as to look for ways to not be affected by the economic downturn. Cloud computing capabilities have created several advances for companies who have realized the positive effect of virtual offices and the savings implications for the company. This technology has helped companies to not only reduce overhead but increase productivity as well. Another plus for companies are virtualizations which not only allow them to eliminate several server farms but has made IT infrastructure more economical and flexible while slashing operating costs. There are moderate barriers for new businesses that wish to enter this industry; however, certain product segments have a higher barrier than others. One common thing in this industry is patents which serve as a means of limiting competition, even though some companies willingly license their patented technology. We are in business to develop software for general purposes and for specific purposes to our various clients.
                                   </div>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-12 text-center">
                                   <br/><br/>
                                   <h1 className="about_us_heading">Technologies</h1>
                                   <br/>
                                       <img className="technology_icon" src={`assets/images/icon/html5.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/css3.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/sass.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/bootstrap.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/wordpress.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/js.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/jq.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/react.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/redux.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/json.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/xml.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/ajax.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/php.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/laravel.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/nodejs.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/java.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/ionic.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/mysql.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/postgresq.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/oracle.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/api.png`} alt="html5"/>
                                       <img className="technology_icon" src={`assets/images/icon/blockchain.png`} alt="html5"/>
                               </div>
                           </div>
                           <div className="row" id="services">
                               <div className="col-md-12">
                               <br/><br/>
                               <h1 className="about_us_heading text-center">Services</h1>
                               </div>
                                   <div className="col-sm-6 col-md-4 wow slideInLeft">
                                       <br/><br/>
                                       <Link to="/web_application" className="link_design">
                                           <div className="card-1 card card_resp">
                                               <img className="service_pic card-img-top card-img" src={`assets/images/services/web_application.png`} alt="customer_software"/>
                                               <br/><br/>
                                               <h4 className="text-center">Web Application</h4>
                                               <div className="card-body">
                                                   Web-based applications, which are built to serve a specific use and customer base; and can be accessed from desktops, laptops, and even mobiles..<Link to="/web_application">Read More</Link>
                                               </div>
                                           </div>
                                       </Link>
                                   </div>
                               <div className="col-sm-6 col-md-4 wow flipInY">
                                   <br/><br/>
                                   <Link to="/mobile_application" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/services/app_application.png`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4  className="text-center">Mobile Application</h4>
                                       <div className="card-body">
                                           Mobile as well as web-based applications are awesome tools for marketing your content to a populace, which is increasingly using their smart..<Link to="/mobile_application">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow slideInRight">
                                   <br/><br/>
                                   <Link to="/software_testing" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/services/software_testing.png`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">QA & Testing</h4>
                                       <div className="card-body">
                                           Testing refers as the process of evaluating a system or its component’s with the intent to find whether it satisfies the specified.Almost every business .<Link to="/software_testing">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4  wow slideInLeft">
                                   <br/><br/>
                                   <Link to="/graphics_solution" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/services/graphic_design.png`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">Graphics Solution</h4>
                                       <div  className="card-body">
                                           Almost every business today creates a video or infographics as part of their content marketing program. In a business context,you can use videos..<Link to="/graphics_solution">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow flipInY">
                                   <br/><br/>
                                   <Link to="/seo_digital_marketing" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/services/seo_digital_banner.png`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">SEO & Digital Marketing</h4>
                                       <div className="card-body">
                                           Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such..<Link to="/seo_digital_marketing">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow slideInRight">
                                   <br/><br/>
                                   <Link to="/bulk_sms" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img" src={`assets/images/services/sms_marketing.jpg`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">Bulk SMS</h4>
                                       <div className="card-body">
                                           SMS marketing is marketing with a mobile device. SMS marketing is similar to advertising delivered  over text and voice messages.SMS marketing...<Link to="/bulk_sms">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                           </div>
                           <br/><br/>
                           {/*<div className="row ">*/}
                           {/*    <div className="col-sm-12 col-md-4 text-center">*/}
                           {/*        <img className="review_img img-responsive" src={`assets/images/review/model_one.jpg`} alt="model_one"/>*/}
                           {/*    </div>*/}
                           {/*    <div className="col-sm-12 col-md-8">*/}
                           {/*        <h3 className="about_us_heading text-center">Our Client Says About Us</h3>*/}
                           {/*        <div className="about_us_text">*/}
                           {/*            SETCOLBD gives the comapny better business intelligence when we're talking with our vendors and customers. It's an accurate ERP management system. SETCOLBD is the most efficient, affordable & customized ERP System provider in the market with great support.*/}
                           {/*            <div>Website : <span><a href="http://www.socialodds.online/" target="_blank">http://www.socialodds.online/</a></span></div>*/}
                           {/*        </div>*/}
                           {/*    </div>*/}
                           {/*</div>*/}
                           {/*<br/>*/}
                           {/*<div className="row">*/}
                           {/*    <div className="col-md-4 text-center">*/}
                           {/*        <img className="review_img img-responsive" src={`assets/images/review/needboat.png`} alt="model_one"/>*/}
                           {/*    </div>*/}
                           {/*    <div className="col-md-8">*/}
                           {/*        <div className="about_us_text">*/}
                           {/*            SETCOLBD is incredible to work with. They have great communication and superb insights into Ecommerce. They went above and beyond to make sure I was completely satisfied with our new website. They completed the job on time and handled all the projects expeditiously. I love his attention to detail. The finished product blow my mind. I highly recommend SETCOLBD.*/}
                           {/*            <div>Website : <span><a href="https://needboat.com/" target="_blank">https://needboat.com/</a></span></div>*/}
                           {/*            <br/><br/>*/}
                           {/*            <div className="text-center"><Link to="/read_more_review">Read More Review</Link></div>*/}
                           {/*        </div>*/}
                           {/*    </div>*/}
                           {/*</div>*/}
                           <div className="row" id="software">
                               <div className="col-md-12">
                                   <br/><br/>
                                   <h1 className="about_us_heading text-center">Software</h1>
                               </div>
                               <div className="col-sm-6 col-md-4 wow slideInLeft">
                                   <br/><br/>
                                   <Link to="/custom_software" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img" src={`assets/images/software/custom_software.png`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">Custom Software</h4>
                                       <div className="card-body">
                                           SETCOLBD offers any kind of customized web based software to the clients of different enterprise.Our pespected clients can easily access to..<Link to="/custom_software">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow flipInY">
                                   <br/><br/>
                                   <Link to="/cloud_based_software" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img" src={`assets/images/software/cloud_based_software.jpg`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">Cloud Based Software</h4>
                                       <div className="card-body">
                                           Cloud presents the remote location. Cloud can provide services over networklike on public networks or on private networks.By cloud based software..<Link to="/cloud_based_software">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow slideInRight">
                                   <br/><br/>
                                   <Link to="/e_commerce" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/software/e_commarce.jpg`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">E-Commerce</h4>
                                       <div className="card-body">
                                           E-commerce describes the process of buying, selling, transferring, or exchanging products, services, and/or information via computer networks..<Link to="/e_commerce">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow slideInLeft">
                                   <br/><br/>
                                   <Link to="/erp" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/software/erp.png`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">ERP Management Software</h4>
                                       <div className="card-body">
                                           Enterprise resource planning (ERP) is the integrated management of business processes,which is mediated by software and technology real-time..<Link to="/erp">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow flipInY">
                                   <br/><br/>
                                   <Link to="/desktop_application" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/software/desktop_application.jpg`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">Desktop Application</h4>
                                       <div className="card-body">
                                           Web-based applications, which are built to serve a specific use and customer base; and can be accessed from desktops, laptops, and even..<Link to="/desktop_application">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                               <div className="col-sm-6 col-md-4 wow slideInRight">
                                   <br/><br/>
                                   <Link to="/cms" className="link_design">
                                   <div className="card-1 card card_resp">
                                       <img className="service_pic card-img-top card-img"  src={`assets/images/software/cms.jpg`} alt="customer_software"/>
                                       <br/><br/>
                                       <h4 className="text-center">CMS</h4>
                                       <div className="card-body">
                                           WordPress can be referred as an open source Content Management System (CMS), which allows the users to build dynamic websites and blog..<Link to="/cms">Read More</Link>
                                       </div>
                                   </div>
                                   </Link>
                               </div>
                           </div>
                           <br/>
                           <div className="row">
                               <div className="col-md-12 text-center">
                                   <h3 className="about_us_heading">Our Work</h3>
                                   <br/>
                               </div>
                               <div className="col-md-4">
                                   <div className="grid">
                                       <figure className="effect-bubba">
                                           <a href="#"><img className="work_pic" src={`assets/images/work/clickteck.png`} alt="client_icon"/></a>
                                           <a href="http://www.clicktech.cz" target="_blank"><figcaption></figcaption></a>
                                       </figure>
                                   </div>
                               </div>
                               <div className="col-md-4">
                                   <div className="grid">
                                       <figure className="effect-bubba">
                                           <a href="#"><img className="work_pic" src={`assets/images/work/lazada.png`} alt="client_icon"/></a>
                                           <a href="http://www.lazada.com/" target="_blank"><figcaption></figcaption></a>
                                       </figure>
                                   </div>
                               </div>
                               <div className="col-md-4">
                                   <div className="grid">
                                       <figure className="effect-bubba">
                                           <img className="work_pic" src={`assets/images/work/needboat.png`} alt="client_icon"/>
                                           <a href="https://needboat.com/" target="_blank"><figcaption></figcaption></a>
                                       </figure>
                                   </div>
                               </div>
                               <div className="col-md-4">
                                   <div className="grid">
                                       <figure className="effect-bubba">
                                           <a href="#"><img className="work_pic" src={`assets/images/work/ruhi-interior-home.png`} alt="client_icon"/></a>
                                           <a href="http://www.ruhiinteriorhome.com/" target="_blank"><figcaption></figcaption></a>
                                       </figure>
                                   </div>
                               </div>
                               <div className="col-md-4">
                                   <div className="grid">
                                       <figure className="effect-bubba">
                                           <a href="#"><img className="work_pic rong_kori_image" src={`assets/images/work/rongkori-mockup.png`} alt="client_icon"/></a>
                                           <a href="http://www.rongkori.com/" target="_blank"><figcaption></figcaption></a>
                                       </figure>
                                   </div>
                               </div>
                               <div className="col-md-4">
                                   <div className="grid">
                                       <figure className="effect-bubba">
                                           <a href="#"><img className="work_pic" src={`assets/images/work/vmc-mockup.png`} alt="client_icon"/></a>
                                           <a href="http://socialodds.online" target="_blank"><figcaption></figcaption></a>
                                       </figure>
                                   </div>
                               </div>
                           </div>
                           <div className="row text-center">
                               <div className="col-md-12">
                                   <br/>
                                   <h3 className="about_us_heading">Some Of Our Client & Partners</h3>
                               </div>
                               <div className="col-md-12">
                                   {/*<Carousel /!*responsive={responsive}*!/>*/}
                                   {/*    <div>Item 1</div>*/}
                                   {/*    <div>Item 2</div>*/}
                                   {/*    <div>Item 3</div>*/}
                                   {/*    <div>Item 4</div>*/}
                                   {/*</Carousel>*/}
                                   {/*<Carousel*/}
                                   {/*    swipeable={false}*/}
                                   {/*    draggable={false}*/}
                                   {/*    showDots={true}*/}
                                   {/*    responsive={responsive}*/}
                                   {/*    ssr={true} // means to render carousel on server-side.*/}
                                   {/*    infinite={true}*/}
                                   {/*    autoPlay={this.props.deviceType !== "mobile" ? true : false}*/}
                                   {/*    autoPlaySpeed={1000}*/}
                                   {/*    keyBoardControl={true}*/}
                                   {/*    customTransition="all .5"*/}
                                   {/*    transitionDuration={500}*/}
                                   {/*    containerClass="carousel-container"*/}
                                   {/*    removeArrowOnDeviceType={["tablet", "mobile"]}*/}
                                   {/*    deviceType={this.props.deviceType}*/}
                                   {/*    dotListClass="custom-dot-list-style"*/}
                                   {/*    itemClass="carousel-item-padding-40-px"*/}
                                   {/*>*/}
                                   {/*    <div>Item 1</div>*/}
                                   {/*    <div>Item 2</div>*/}
                                   {/*    <div>Item 3</div>*/}
                                   {/*    <div>Item 4</div>*/}
                                   {/*</Carousel>;*/}
                               {/*<Carousel autoPlay interval={1000} infiniteLoop>*/}
                               {/*    <div>*/}
                               {/*        <img src={`assets/images/icon/sattar.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/dream_lpg.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/dream_world.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/bright_argo.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/lahari_publication.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/national_trading.jpg`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/national_volunteers.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/vmc.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/need_boat.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/ruhi.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/click_tech.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/robi.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/need_boat.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/banglalink.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*    <div>*/}
                               {/*        <img  src={`assets/images/icon/rankstel.png`} alt="client_icon"/>*/}
                               {/*    </div>*/}
                               {/*</Carousel>*/}
                               </div>
                               {/*<div className="col-md-12">*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/sattar.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/dream_lpg.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/dream_world.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/bright_argo.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/lahari_publication.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/national_trading.jpg`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/national_volunteers.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/vmc.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon_two" src={`assets/images/icon/need_boat.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/ruhi.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/click_tech.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/robi.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/banglalink.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/airtel.png`} alt="client_icon"/>*/}
                               {/*    <img className="client_icon" src={`assets/images/icon/rankstel.png`} alt="client_icon"/>*/}
                               {/*</div>*/}
                           </div>
                           <div className="row" id="contact">
                               <div className="col-md-2"></div>
                               <div className="col-md-8">
                                   <div className="wrap-contact100">
                                      <span className="contact100-form-symbol"><img src={`assets/images/icon/contact_icon.png`} alt="SYMBOL-MAIL"/></span>
                                       <div className="contact_us text-center">If You Have Any Kind Of Curiosity Just Feel Free And Give Us Text.Our Support Team Is Always There For You When You Need Us.Thanks In Advance</div>
                                       <br/>
                                       <form ref="contactForm" action="" method="post" onSubmit={this.handleSubmit}>
                                           <input name="_token" value="{{ csrf_token() }}" type="hidden"/>
                                           <div className="form-group">
                                               <label className="contact_us" htmlFor="name">Name : </label>
                                               <input type="text" className="form-control" id="name" name="name" required onChange={this.contactFormValue}/>
                                           </div>
                                           <div className="form-group">
                                               <label className="contact_us" htmlFor="email">Email address :</label>
                                               <input type="email" className="form-control" id="email" name="email" required onChange={this.contactFormValue}/>
                                           </div>
                                           <div className="form-group">
                                               <label className="contact_us" htmlFor="Message">Message :</label>
                                               <textarea className="form-control resize_message" rows="5" id="message" name="message" required onChange={this.contactFormValue}></textarea>
                                           </div>
                                           <input type="submit" className="btn btn-outline-secondary btn-lg btn-block" value="Send"/>
                                           <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_LEFT}/>
                                       </form>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <br/><br/><br/>
                       <Footer/>
                   </div>
            )
        }
}
export default Home;