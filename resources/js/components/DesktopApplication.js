import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class DesktopApplication extends Component{
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
                            <h2 className="about_us_heading">Desktop Application</h2>
                            <img className="img-responsive post-img" src={`assets/images/software/desktop_application.jpg`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12  about_us_text">
                            Desktop based Application software is a software designed to perform a group of coordinated functions, tasks or activities for the benefit of the user.Desktop virtualization is a software technology which separates the desktop environment and associated application software from the real client device.An application that runs stand-alone in a desktop or laptop computer.The term may be used to contrast desktop applications with mobile applications which is run in smartphones and tablets.In Windows, a desktop application is one that runs in the traditional Windows desktop in contrast to a tablet application that runs in full screen.Examples of an application are a word processor, a spreadsheet, an accounting application, a web browser, an email client, a media player, a file viewer, an aeronautical flight simulator, a console game or a photo editor. This contrasts with system software which is mainly involved with running the computer.
                            In information technology, desktop based software application is a computer program designed helping people to perform an activity. An application hence differs from an operating system, a utility, and a programming tool. Depending on the activity for which it was designed, an application can manipulate text, numbers, audio, graphics and a combination of these elements. Some application packages focus on a single task such as word processing and others, called integrated software include several applications
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}


export default DesktopApplication;