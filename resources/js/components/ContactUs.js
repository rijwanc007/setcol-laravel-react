import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from "react-toasts";
import axios from "axios";


class ContactUs extends Component{
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
                <HeaderTwo/>
                <div className="container ">
                <div className="row" id="contact">
                    <div className="col-md-2 "></div>
                    <div className="col-md-8 menu_top_margin">
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
                <br/>
                <Footer/>
            </div>
        )
    }
}

export default ContactUs;