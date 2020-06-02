import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class CloudBasedSoftware extends Component{
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
                            <h2 className="about_us_heading">Cloud Based Software</h2>
                            <img className="img-responsive post-img" src={`assets/images/software/cloud_based_software.jpg`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            Cloud presents the remote location. Cloud can provide services over networklike on public networks or on private networks.By cloud based software service we can access the applicationsover the Internet. It allows to create, configure and customize applications online. We don’t need to install a piece of software on our local PC and this is how the cloud computing overcomes theplatform dependency issues. Hence, the Cloud Based Software Service makes our business application mobile and collaborative. Cloud based softwareconsists of servers, storages, networks, management software and deployment software and platform virtualization.There are a certain services and modules working behind the scene to make the cloud based software feasible and accessible to the end users.Before deploying cloud based software application to cloud, it is most important to consider clients business requirements. Need much more concern about data security, data privacy, budgetof service, type of cloud system, data backup facilities, proper training and data export facilities.Focus on client’s access requirements is mostly needed. Well-compiled planningis necessary to meet all of these requirements. Weare providing the various planning phases that is practiced by an enterprise before migrating the entire business to cloud. Cloud based software refers to a software that is deployed on a hosted service which is accessible via Internet.
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}

export default CloudBasedSoftware;