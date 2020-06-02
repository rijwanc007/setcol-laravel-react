import React,{ Component } from 'react';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';


class GraphicsSolution extends Component{
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
                            <h2 className="about_us_heading">Graphics Solution</h2>
                            <img className="img-responsive post-img" src={`assets/images/services/graphic-design-large.png`} alt="web_application"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="about_us_text col-md-4">
                            <ul>
                                <li><img className="ul_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/> Brand Identity Design</li>
                                <li><img className="ul_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/>Graphics design & Pre Print Design</li>
                                <li><img className="ul_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/>Web Graphics</li>
                                <li><img className="ul_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/>Illustration Designing</li>
                                <li><img className="ul_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/>2D animation</li>
                                <li><img className="ul_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/>3D Animation</li>
                                <li><img className="ul_icon" src={`assets/images/icon/arrow.png`} alt="arrow"/>Printing design</li>
                            </ul>
                        </div>
                        <div className="col-md-12 about_us_text">
                            Almost every business today creates a video or infographics as part of their content marketing program. In a business context, you can use videos to give customers a guided tour of your product or service. With infographics, you can help your customers understand a specific problem that you solve for them. However, the use of videos and infographics are not limited to product tutorials and guides. With the unprecedented growth of video sites like YouTube and Vimeo and infographic sites like Listly, you can use videos and infographics to create brand awareness, generate sales leads and establish yourself as a thought leader in the industry.
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}

export default GraphicsSolution;