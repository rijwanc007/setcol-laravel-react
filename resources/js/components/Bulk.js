import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';

class Bulk extends Component{
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
                            <h2 className="about_us_heading">Bulk sms</h2>
                            <img className="img-responsive post-img" src={`assets/images/services/sms_marketing.jpg`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            SMS marketing is marketing with a mobile device. SMS marketing is similar to advertising delivered over text and voice messages. SMS marketing can provide the customers with time and location sensitive, personalized information that promotes goods, services, and ideas.SMS messaging (text messaging) is currently the most common delivery channel for mobile marketing.
                            Mobile marketing is multi-channel online marketing technique focused at reaching a specific audience on their smart phone, tablets. Mobile marketing can provide customers with time and location sensitive, personalized information that promotes goods, services and ideas. Marketing through cell phones' SMS (Short Message Service) became increasingly popular in the early year.
                            Over the past few years SMS marketing has become a legitimate advertising channel in some parts of the world. This is because unlike email over the public internet, the carriers who police their own networks have set guidelines and best practices for the mobile media industry (including mobile advertising)
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="about_us_heading">Non Masking SMS Packages</h2>
                            <br/>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>SMS Quantity</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10,000</td>
                                    <td> 0.55  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10,000 - 30,000</td>
                                    <td> 0.51  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>30,000 - 50,000</td>
                                    <td> 0.46  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>50,000 - 80,000</td>
                                    <td> 0.40  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>80,000 - 1,00,000</td>
                                    <td> 0.37  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>1,00,000 - 3,00,000</td>
                                    <td> 0.39  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>3,00,000 - 5,00,000</td>
                                    <td> 0.28  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>5,00,000++</td>
                                    <td> 0.25  Tk/SMS </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="about_us_heading">Masking SMS Packages</h2>
                            <br/>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>SMS Quantity</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10,000</td>
                                    <td> 0.66  Tk/SMS*</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10,000 - 30,000</td>
                                    <td> 0.63  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>30,000 - 50,000</td>
                                    <td> 0.60  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>50,000 - 80,000</td>
                                    <td> 0.57  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>80,000 - 1,00,000</td>
                                    <td> 0.54  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>1,00,000 - 3,00,000</td>
                                    <td> 0.50  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>3,00,000 - 5,00,000</td>
                                    <td> 0.47  Tk/SMS </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>5,00,000++</td>
                                    <td> 0.44  Tk/SMS </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="about_us_heading">Voice SMS Packages</h2>
                            <br/>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>SMS Quantity</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10,000</td>
                                    <td>
                                        15 sec - 0.75  Tk/SMS<br/>
                                        20 sec - 1.00  Tk/SMS<br/>
                                        30 sec - 1.50  Tk/SMS
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10,000 - 50,000</td>
                                    <td>
                                        15 sec - 0.68  Tk/SMS<br/>
                                        20 sec - 0.90  Tk/SMS<br/>
                                        30 sec - 1.35  Tk/SMS
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        50,000 - 1,00,000<br/>
                                        ** Every 5 Second Pulse
                                    </td>
                                    <td>
                                        15 sec - 0.60  Tk/SMS<br/>
                                        20 sec - 0.80  Tk/SMS<br/>
                                        30 sec - 1.20  Tk/SMS
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        1,00,000 - 3,00,000<br/>
                                        ** Every 5 Second Pulse
                                    </td>
                                    <td>
                                        15 sec - 0.55  Tk/SMS<br/>
                                        20 sec - 0.73  Tk/SMS<br/>
                                        30 sec - 1.07  Tk/SMS
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        3,00,000 - 5,00,000<br/>
                                        ** Every 5 Second Pulse
                                    </td>
                                    <td>
                                        15 sec - 0.47  Tk/SMS<br/>
                                        20 sec - 0.65  Tk/SMS<br/>
                                        30 sec - 0.95  Tk/SMS
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>
                                        5,00,000++<br/>
                                        ** Every 5 Second Pulse
                                    </td>
                                    <td>
                                        15 sec - 0.43  Tk/SMS<br/>
                                        20 sec - 0.60  Tk/SMS<br/>
                                        30 sec - 0.88  Tk/SMS
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}


export default Bulk;