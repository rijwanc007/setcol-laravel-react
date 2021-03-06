import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import jQuery from 'jquery';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        !function(i){i.fn.skdslider=function(t){return this.each(function(){new function(t,s){var e,n,o,h=this;if(o={delay:2e3,animationSpeed:500,showNav:!0,autoSlide:!0,showNextPrev:!1,pauseOnHover:!1,numericNav:!1,showPlayButton:!1,stopSlidingAfter:!1,animationType:"fading",slideSelector:".slide",activeClass:"active",onMarkup:function(){}},this.options=i.extend({},o,s),this.isTouchable=!!("ontouchstart"in window)||!!navigator.msMaxTouchPoints,this.currentSlide=0,this.nextSlide=0,this.isPaused=!1,this.playPauseStatus=this.options.autoSlide,this.isAnimating=!1,this.container=i(t),this.dom={},this.element=this.container.wrap('<div class="skdslider"></div>').closest("div.skdslider"),this.slides=this.container.find(this.options.slideSelector),this.totalSlides=this.slides.length,this.dimension={width:this.element.outerWidth(),height:this.element.outerHeight()},!this.totalSlides)throw"There are no slides found. Look likes your have not set slideSelector option properly";this.pivotImage=this.slides.eq(0).find("img"),this.markup={navs:"<li>%d</li>",prev:'<a class="prev"></a>',next:'<a class="next"></a>',play:'<a class="play"></a>'},this.init=function(){this.createEnvironment(),this.options.onMarkup.call(this),this.createNav(),this.enableEvents(),this.slides.eq(this.currentSlide).show(),this.slides.eq(this.nextSlide).addClass(this.options.activeClass),this.dom.navs.eq(this.nextSlide).addClass(this.options.activeClass),this.options.stopSlidingAfter&&("all"==this.options.stopSlidingAfter&&(this.options.stopSlidingAfter=this.slides.length),this.options.stopSlidingAfter-=1),0==this.dimension.height&&this.pivotImage[0].complete&&this.getDimension(),this.options.autoSlide&&(this.play(),this.dom.play&&this.dom.play.removeClass("play").addClass("pause"))},this.next=function(){this.isAnimating=!1,this.nextSlide++,this.nextSlide==this.totalSlides&&(this.nextSlide=0),this.play()},this.prev=function(){this.isAnimating=!1,this.nextSlide--,-1==this.nextSlide&&(this.nextSlide=this.totalSlides-1),this.play()},this.animate=function(){var i,t;this.isAnimating=!0,this.dom.navs.removeClass(this.options.activeClass),this.dom.navs.eq(this.nextSlide).addClass(this.options.activeClass),this.slides.removeClass(this.options.activeClass),this.slides.eq(this.nextSlide).addClass(this.options.activeClass),this.stopAnimation(),"fading"==this.options.animationType?(this.slides.eq(this.currentSlide).fadeOut(this.options.animationSpeed),this.slides.eq(this.nextSlide).fadeIn(this.options.animationSpeed,function(){h.isAnimating=!1})):((t=this.element.outerWidth())!=this.slides.eq(0).outerWidth()&&this.setDimension(),i=-1*this.nextSlide*t,this.container.animate({left:i},this.options.animationSpeed,function(){h.isAnimating=!1})),this.currentSlide=this.nextSlide},this.play=function(){this.removeTimer(),this.animate(),this.addTimer()},this.addTimer=function(){!this.isPaused&&this.options.autoSlide&&(this.timer=setTimeout(this.next.bind(this),this.options.delay)),this.handleStopAtSlide()},this.removeTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer="")},this.stopAnimation=function(){"fading"==this.options.animationType?this.slides.stop():this.container.stop()},this.handleStopAtSlide=function(){this.options.stopSlidingAfter&&this.options.stopSlidingAfter==this.nextSlide&&(this.dom.play&&this.dom.play.removeClass("pause").addClass("play"),this.isPaused=!0,this.playPauseStatus=!1,this.options.autoSlide=!1)},this.createNav=function(){var t,s,e="",n="";for(t=0;t<this.totalSlides;t++)this.options.numericNav&&(n=t+1),e+=this.markup.navs.replace("%d",n);this.options.showNav&&(s=i('<ul class="slide-navs">'+e+"</ul>"),this.element.append(s),this.dom.navs=s.children()),this.options.showNextPrev&&(this.dom.prev=i(this.markup.prev),this.dom.next=i(this.markup.next),this.element.append(this.dom.prev,this.dom.next)),this.options.showPlayButton&&(this.dom.play=i(this.markup.play),this.element.append(this.dom.play))},this.createEnvironment=function(){var t,s={float:"left",display:"block",position:"relative"},e={position:"absolute",left:"0",top:"0",bottom:"0",right:"0"};this.slides.each(function(){i(this).css("fading"==h.options.animationType?e:s)}),"sliding"==this.options.animationType&&(t=this.element.outerWidth()*this.totalSlides,this.container.css({position:"absolute",left:"0",width:t})),this.setDimension()},this.enableEvents=function(){var t,s;this.dom.navs&&this.dom.navs.on("click",function(i){i.preventDefault(),this.nextSlide=this.dom.navs.index(i.target),this.isAnimating=!1,this.play()}.bind(this)),this.dom.prev&&this.dom.prev.on("click",function(i){i.preventDefault(),this.prev()}.bind(this)),this.dom.next&&this.dom.next.on("click",function(i){i.preventDefault(),this.next()}.bind(this)),this.dom.play&&this.dom.play.on("click",function(i){i.preventDefault(),this.playPauseStatus?(this.isPaused=!0,this.playPauseStatus=!1,this.removeTimer(),this.stopAnimation(),this.dom.play.removeClass("pause").addClass("play")):(this.isPaused=!1,this.playPauseStatus=!0,this.next(),this.dom.play.removeClass("play").addClass("pause"))}.bind(this)),this.element.on("mouseenter",function(i){i.preventDefault(),this.dom.play&&this.dom.play.show(),this.playPauseStatus&&this.options.pauseOnHover&&(this.isPaused=!0,this.removeTimer(),this.stopAnimation())}.bind(this)),this.element.on("mouseleave",function(i){i.preventDefault(),this.dom.play&&this.dom.play.hide(),this.playPauseStatus&&this.options.pauseOnHover&&(this.isPaused=!1,this.addTimer())}.bind(this)),this.isTouchable&&(this.element.on("touchstart",function(i){t=i.touches[0].pageX,i.touches[0].pageY}),this.element.on("touchmove",function(i){var e=i.touches[0].pageX;i.touches[0].pageY,s=t-e}),this.element.on("touchend",function(i){i.preventDefault(),s>0?this.next():this.prev()}.bind(this))),i(window).resize(this.setDimension),this.pivotImage.on("load",this.getDimension)},this.getDimension=function(){this.dimension.width=this.pivotImage[0].naturalWidth||this.pivotImage[0].target.width,this.dimension.height=this.pivotImage[0].naturalHeight||this.pivotImage[0].height,this.setDimension()},this.setDimension=function(){var i="fading"==this.options.animationType?this.element.outerWidth():this.element.outerWidth()*this.totalSlides,t=this.element.outerWidth(),s=Math.ceil(this.dimension.height*(t/this.dimension.width));e={width:i,height:s},n={height:s},this.container.css("fading"==this.options.animationType?n:e),this.element.css({height:s}),this.slides.css({width:t})},this.setDimension=this.setDimension.bind(this),this.getDimension=this.getDimension.bind(this),this.init()}(this,t)})}}(jQuery),jQuery(document).ready(function(){jQuery("#slider").skdslider({slideSelector:".slide",delay:5e3,animationSpeed:2e3,showNextPrev:!0,showPlayButton:!0,autoSlide:!0,animationType:"fading"})});
    }
    componentDidMount() {
        function sticky_relocate(){$(window).scrollTop()>$(".sticky-anchor").offset().top?$("#sticky").addClass("stick"):$("#sticky").removeClass("stick")}$(function(){$(window).scroll(sticky_relocate),sticky_relocate()});
    }
    render(){
        return(
          <div>
              <div className="row">
                  <div className="col-md-12 text-center div_position_z_index">
                     <div className="cd_1">
                         <div className="card_box card-1">
                             <a href="https://www.facebook.com/setcolbd/" target="_blank"><img className="social_icon" src={`assets/images/icon/facebook.png`} alt="facebook"/></a>
                             <a href="https://www.instagram.com/setcolbd/" target="_blank"><img className="social_icon" src={`assets/images/icon/instagram.png`} alt="instagram"/></a>
                             <a href="https://www.linkedin.com/company/setcolbd/" target="_blank"><img className="social_icon" src={`assets/images/icon/linkedin.png`} alt="linkedin"/></a>
                             <a href="https://www.twitter.com/setcolbd/" target="_blank"><img className="social_icon" src={`assets/images/icon/twiter.png`} alt="twiter"/></a>
                             <a href="https://www.pinterest.com/setcolbd/" target="_blank"><img className="social_icon" src={`assets/images/icon/pinterest.png`} alt="youtube"/></a>
                         </div>
                     </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="div_position_slide">
                          <div id="slider">
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_software_testing.png`} alt="software_testing"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_corona.jpg`} alt="software_testing"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_brand.png`} alt="banner_brand"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_cloud_based.png`} alt="banner_cloud_based"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_bulk_sms.png`} alt="banner_bulk"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_security.png`} alt="banner_security"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/erp.jpg`} alt="erp"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_one.png`} alt="banner_one"/>
                              </div>
                              <div className="slide">
                                  <img src={`assets/images/banner/banner_six.jpg`} alt="banner_six"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="sticky-anchor" className="sticky-anchor"></div>
              <div className="row div_position_menu" id="sticky">
                  <div className="col-md-12 text-center">
                      <div className="cd-2">
                          <div className="card_box card-1 card-3">
                              <table>
                                  <tbody>
                                  <tr>
                                      <td><a className="menu_item_link" href="#"><div className="menu_item">Home</div></a></td>
                                      <td><a className="menu_item_link" href="#services"><div className="menu_item">Services</div></a></td>
                                      <td><a className="menu_item_link" href="#software"><div className="menu_item">Software</div></a></td>
                                      <td><Link className="menu_item_link" to="/career"><div className="menu_item">Career</div></Link></td>
                                      <td><a className="menu_item_link" href="#contact"><div className="menu_item">Get In Touch</div></a></td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Header;