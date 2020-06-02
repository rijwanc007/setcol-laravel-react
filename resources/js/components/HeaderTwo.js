import React,{ Component } from  'react';
import { Link } from 'react-router-dom';
class HeaderTwo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="sticky-anchor"></div>
                    <div className="col-md-12 menu_position_two text-center">
                        <div className="card_box card-1">
                            <table>
                                <tbody>
                                <tr>
                                    <td><Link className="menu_item_link" to="/"><div className="menu_item menu_item_link">Home</div></Link></td>
                                    <td>
                                    <li className="nav-item service_hover">
                                        <a className="nav-link menu_item_link" data-scroll href="#services">Service<span><img className="down_arrow" src={`assets/images/icon/down_arrow_two.png`} alt="down_arrow"/></span></a>
                                        <div className="container service_menu">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <ul className="margin_service">
                                                        <li className="margin_minus"><Link to="/web_application">Web Application</Link></li>
                                                        <li className="margin_minus"><Link to="/mobile_application">Mobile Application</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4">
                                                    <ul className="margin_service">
                                                        <li className="margin_minus"><Link className="li_padding" to="/software_testing">Software Testing</Link></li>
                                                        <li className="margin_minus"><Link className="li_padding" to="/graphics_solution">Graphics Solution</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4">
                                                    <ul className="">
                                                        <li className="margin_minus"><Link className="li_padding" to="/seo_digital_marketing">SEO & Digital Marketing</Link></li>
                                                        <li className="margin_minus"><Link className="li_padding" to="/bulk_sms">Bulk SMS</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </td>
                                    <td>
                                        <li className="nav-item service_hover">
                                            <a className="nav-link menu_item_link" data-scroll href="#services">Software<span><img className="down_arrow" src={`assets/images/icon/down_arrow_two.png`} alt="down_arrow"/></span></a>
                                            <div className="container service_menu">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul className="margin_service">
                                                            <li className="margin_minus"><Link to="/custom_software">Custom Software</Link></li>
                                                            <li className="margin_minus"><Link to="/cloud_based_software">Cloud Based Software</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="margin_service">
                                                            <li className="margin_minus"><Link className="li_padding" to="/e_commerce">E Commerce</Link></li>
                                                            <li className="margin_minus"><Link className="li_padding" to="/erp">ERP Management Software</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="">
                                                            <li className="margin_minus"><Link className="li_padding" to="/desktop_application">Desktop Application</Link></li>
                                                            <li className="margin_minus"><Link className="li_padding" to="/cms">CMS</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </td>
                                    <td><Link className="menu_item_link" to="/career"><div className="menu_item">Career</div></Link></td>
                                    <td><Link className="menu_item_link" to="/contact_us"><div className="menu_item">Get In Touch</div></Link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        )
    }
}
export default HeaderTwo;
