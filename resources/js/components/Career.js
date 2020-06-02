import React,{ Component } from 'react';
import Modal from 'react-awesome-modal';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class Career extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible : false,
            visibleOne : false,
            visibleTwo :false,
        }
    }
    openModal() {
        this.setState({
            visible : true,
        });
    }
    closeModal() {
        this.setState({
            visible : false,
        });
    }
    openModalOne(){
        this.setState({
            visibleOne : true,
        })
    }
    closeModalOne(){
        this.setState({
            visibleOne : false,
        })
    }
    openModalTwo(){
        this.setState({
            visibleTwo : true,
        })
    }
    closeModalTwo(){
        this.setState({
            visibleTwo : false,
        })
    }
    render(){
        return(
            <div>
                <section>
                    <Modal visible={this.state.visible} width="600" height="600" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="about_us_heading">Developers</h3>
                            </div>
                            <img className="career_image img-responsive" src={`assets/images/job_image/developer.jpg`} alt="developer"/>
                            <div className="col-md-12 text-center">
                                <button className="btn btn-danger" onClick = {() => this.closeModal()}>Close</button>
                            </div>
                        </div>
                    </Modal>
                </section>
                <section>
                    <Modal visible={this.state.visibleOne} width="600" height="600" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="about_us_heading">Executive/Senior Exec.(Sales & Marketing IT)</h3>
                            </div>
                            <img className="career_image img-responsive" src={`assets/images/job_image/sales.jpg`} alt="developer"/>
                            <div className="col-md-12 text-center">
                                <button className="btn btn-danger" onClick={ ()=> {this.closeModalOne()}}>Close</button>
                            </div>
                        </div>
                    </Modal>
                </section>
                <section>
                    <Modal visible={this.state.visibleTwo} width="600" height="600" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="about_us_heading">Intern</h3>
                            </div>
                            <img className="career_image img-responsive" src={`assets/images/job_image/internship.jpg`} alt="developer"/>
                            <div className="col-md-12 text-center">
                                <button className="btn btn-danger" onClick={ ()=> {this.closeModalTwo()}}>Close</button>
                            </div>
                        </div>
                    </Modal>
                </section>
              <HeaderTwo/>
                <div className="row">
                    <div className="col-md-12 menu_top_margin text-center">
                        <h2 className="about_us_heading">Career</h2>
                        <h3 className="about_us_text">Choose Your Career With Us</h3>
                    </div>
                </div>
                <div className="container">
                    <br/>
                    <div className="career_div">
                        <h1 className="about_us_text" style={{marginLeft:'3%'}}>Jobs</h1>
                        <div className="row">
                            <div className="card_two card-2">
                                <div className="about_us_text">Developers</div>
                                <div className="about_us_text">Frontend & Backend</div>
                                <div className="about_us_text career_pointer" onClick={() => this.openModal()}>More Details <span><img className="career_arrow" src={`assets/images/icon/arrow.png`} alt="arrow"/></span></div>
                            </div>
                            <div className="card_two card-2">
                                <div className="about_us_text">Executive/Senior Exec.(Sales & Marketing IT)</div>
                                <div className="about_us_text">Developer</div>
                                <div className="about_us_text career_pointer" onClick={ ()=> {this.openModalOne()}}>More Details <span><img className="career_arrow" src={`assets/images/icon/arrow.png`} alt="arrow"/></span></div>
                            </div>
                            <div className="card_two card-2">
                                <div className="about_us_text">Intern</div>
                                <div className="about_us_text">Frontend & Backend & Sales</div>
                                <div className="about_us_text career_pointer" onClick={ ()=> {this.openModalTwo()}}>More Details <span><img className="career_arrow" src={`assets/images/icon/arrow.png`} alt="arrow"/></span></div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
              <Footer/>
            </div>
        )
    }
}

export default Career;