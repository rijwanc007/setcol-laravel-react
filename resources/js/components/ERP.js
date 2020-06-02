import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class ERP extends Component{
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
                            <h2 className="about_us_heading">ERP Management Software</h2>
                            <img className="img-responsive post-img" src={`assets/images/software/erp.png`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 about_us_text">
                            Enterprise resource planning (ERP) is the integrated management of business processes,which is mediated by software and technologyin real-time.The ERP system integrates varied organizational systems and facilitates error-free transactions and production to enhance the organization's efficiency. ERP systems run on anykind of computer hardware and network configurations and typically using a database as an information repository.ERP is a web–based software which provides real–time access to ERP systems to management, employees and partners. ERP systems actually focused on automating back office functions that did not directly affect customers and the public. Front office functions, such as customer relationship management, deal directly with customers, or e-business systems such as e-commerce, e-government, e-telecom, and e-finance—or supplier relationship management became integrated step by step later, when the internet simplified communicating with external parties. As the use of mobile phone is vast now, soweare making more effort to integrate mobile devices and business intelligence (BI) with the ERP system. ERP vendors are extending ERP to mobile devices along with other business applications.ERP systems connect to real–time data and transaction data in a variety of ways. These systems are typically configured by systems integrators, who bring unique knowledge on process, equipment, and vendor solutions. ERP systems connect to data sources through staging tables in a database. Systems deposit the necessary information into the database. The ERP system reads the information in the table. ERP's scope usually implies to make changes in staff’s work processes and practices. There are three types of services are available to implement such changes—consultation, customization, and support. The implementation time ofERP depends on business size, number of modules, customization, the scope of process changes and the readiness of the customer to take ownership for the project. Customization can substantially increase implementation times.Configuring an ERP system is a matter of balancing the way, the organization wants the system to work with the way it was designed to work. ERP systems typically include many settings which modify system operations ERP customers have several options to reconcile feature gaps, each with their own pros/cons. Technical solutions include rewriting part of the delivered software, writing a homegrown module to work within the ERP system, or interfacing to an external system. These three options constitute varying degrees of system customization—with the first being the most invasive and costly to maintain. Alternatively, there are non-technical options such as changing business practices or organizational policies to better match the delivered ERP feature set.ERP systems can be extended with third–party software, often via vendor-supplied interfaces. Extensions offer features are product data management, product life cycle management, customer relations management, data mining, e-procurement etc.Data migration is the process of moving, copying, and restructuring data from an existing system to the ERP system. Migration is critical to implementation success and requires significant planning. Unfortunately, since migration is one of the final activities before the production phase, it often receives insufficient attention.ERP creates a more agile company that adapts better to change. It also makes a company more flexible and less rigidly structured so organization components operate more cohesively, enhancing the business—internally and externally.ERP can improve data security in a closed environment. A common control system, such as the kind offered by ERP systems, allows organizations the ability to more easily ensure key company data is not compromised. This changes, however, with a more open environment, requiring further scrutiny of ERP security features and internal company policies regarding security. ERP provides increased opportunities for collaboration. Data takes many forms in the modern enterprise, including documents, files, forms, audio and video, and emails. Often, each data medium has its own mechanism for allowing collaboration. ERP provides a collaborative platform that lets employees                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}



export default ERP;