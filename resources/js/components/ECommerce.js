import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class ECommerce extends Component{
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
                            <h2 className="about_us_heading">ECommerce</h2>
                            <img className="img-responsive post-img" src={`assets/images/software/e_commarce.jpg`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            E-commerce describes the process of buying, selling, transferring, or exchanging products, services, and/or information via computer networks, including the Internet. E-business refers to a broader definition of e-commerce, not just the buying and selling of goods and services, but also servicing customers, collaborating with business partners, conducting e-learning, and processing electronic transactions. B2B e-commerce is simply defined as ecommerce between companies. About 80% of e-commerce is of this type. Business-to-consumer e-commerce, or commerce between companies and consumers, involves customers gathering information; purchasing physical goods or receiving products over an electronic network. Business-to-government e-commerce or B2G is generally defined as commerce between companies and the public sector. It refers to the use of the Internet for public procurement, licensing procedures, and other government-related operations. M-commerce is like mobile commerce is the buying and selling of goods and services through wireless technology-i.e., handheld devices such as cellular telephones. An e-marketplace is a location on the Internet where companies can obtain or disseminate information, engage in transactions, or work together in some way. E-market is Web sites where buyers and sellers come together to communicate, exchange ideas, advertise, bid in auctions, conduct transactions, and coordinate inventory and fulfillment
                            E-commerce brings convenience for customers as they do not have to leave home and only need to browse website online, especially for buying the products which are not sold in nearby shops. It could help customers buy wider range of products and save customers’ time. Consumers also gain power through online shopping. They are able to research products and compare prices among retailers. Also, online shopping often provides sales promotion or discounts code, thus it is more price effective for customers. Moreover, e-commerce provides products’ detailed information; even the in-store staff cannot offer such detailed explanation. Customers can also review and track the order history online. E-commerce technologies cut transaction costs by allowing both manufactures and consumers to skip through the intermediaries. This is achieved through by extending the search area best price deals and by group purchase. The success of e-commerce in urban and regional levels depend on how the local firms and consumers have adopted to e-commerce.
                            However, e-commerce lacks human interaction for customers, especially who prefer face-to-face connection. Customers are also concerned with the security of online transactions and tend to remain loyal to well-known retailers. When the customer regret the purchase of a product, it involves returning goods and refunding process. This process is inconvenient as customers need to pack and post the goods. If the products are expensive, large or fragile, it refers to safety issues.
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <h2 className="about_us_heading text-center">Features</h2>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Content_management_enabled.png`} alt="trail_one"/>
                            <span className="feature">Content management capabilities</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Promotion_and_discount_code_tools.png`} alt="trail_one"/>
                            <span className="feature">Promotion and discount code tools</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/easy_way_to_check_out.png`} alt="trail_one"/>
                            <span className="feature">An easy-to-use checkout</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/search_engine_optimized.png`} alt="trail_one"/>
                            <span className="feature">Search engine optimized code and layout</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Reporting_tools.png`} alt="trail_one"/>
                            <span className="feature">Reporting tools</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/An_integrated_blog_or_articles_section.png`} alt="trail_one"/>
                            <span className="feature">An integrated blog or articles section</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Email_marketing_integration.png`} alt="trail_one"/>
                            <span className="feature">Email marketing integration</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Multiple_payment_options.png`} alt="trail_one"/>
                            <span className="feature">Multiple payment options </span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Cross-platform_coverage.png`} alt="trail_one"/>
                            <span className="feature">The ability to scale up with your platform</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Ease_of_Use.png`} alt="trail_one"/>
                            <span className="feature">Ease of Use</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/High-Resolution_Photos_and_Video.png`} alt="trail_one"/>
                            <span className="feature">High-Resolution Photos and Video</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Mobile-Friendly_Website.png`} alt="trail_one"/>
                            <span className="feature">Mobile-Friendly Website</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/User-Generated_Reviews.png`} alt="trail_one"/>
                            <span className="feature">User-Generated Reviews</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/special-offer.png`} alt="trail_one"/>
                            <span className="feature">Special Offers</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Wish_Lists.png`} alt="trail_one"/>
                            <span className="feature">Wish Lists</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Find-in-Store.png`} alt="trail_one"/>
                            <span className="feature">Find-in-Store</span>
                        </div>
                        <div className="col-md-4 feature-grp">
                            <img className="web_application_icon img-responsive" src={`assets/images/icon/Related_Items.png`} alt="trail_one"/>
                            <span className="feature">Related Items</span>
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}


export default ECommerce