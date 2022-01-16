import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* <!-- footer area start --> */}
            <footer className="footer-area text-center" style={{background: 'url(assets/img/shape/footer-bg-1.png)' }}>
                <div className="container">
                    <div className="footer-thumb">
                        <a href="index.html"><img src="assets/img/logo-2.png" alt="img"/></a>
                    </div>  
                    <div className="widget-footer-link">
                        <ul>
                            <li><NavLink to='/'>HOME</NavLink></li>
                            <li><NavLink to='/about'>ABOUT</NavLink></li>
                            <li><NavLink to='/feature'>FEATURES</NavLink></li>
                            <li><NavLink to='/blog'>BLOG</NavLink></li>
                            <li><NavLink to='/faq'>FAQ</NavLink></li>
                            <li><NavLink to='/contact'>CONTACT</NavLink></li>
                        </ul>
                    </div> 
                    <div className="widget-footer-social">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fa fa-google"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!--Footer bottom--> */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="copyright-area">
                            <p>© 2022 ProoLand. All Rights Reserved</p>                        
                        </div>              
                    </div>
                </div>
            </footer>
            {/* <!-- footer area end -->         */}

            {/* <!-- back to top area start --> */}
            <div className="back-to-top">
                <span className="back-top"><i className="fa fa-angle-up"></i></span>
            </div>
            {/* <!-- back to top area end --> */}
        </>
    );
};

export default Footer;