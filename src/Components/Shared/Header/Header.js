import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {/* <!-- preloader area start --> */}
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
            {/* <!-- preloader area end --> */}

            {/* <!-- search popup area start --> */}
            <div className="search-popup" id="search-popup">
                <form action="https://s7template.com/tf/prooland/index.html" className="search-form">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search....."/>
                    </div>
                    <button type="submit" className="submit-btn"><i className="fas fa-search"></i></button>
                </form>
            </div>
            {/* <!-- //. search Popup --> */}

            {/* <!-- navbar start --> */}
            <div className="navbar-area style-3">
                <nav className="navbar navbar-expand-lg">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <button className="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu" 
                            aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-left"></span>
                                <span className="icon-right"></span>
                            </button>
                        </div>
                        <div className="logo">
                            <a className="main-logo" href="index.html"><img src="assets/img/logo.png" alt="img"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="themefie_main_menu">
                            <ul className="navbar-nav menu-open ml-auto">
                                <li className="menu-item-has-children current-menu-item">
                                    <a href="#">HOME</a>
                                    <ul className="sub-menu">
                                        <li><NavLink to='/'>Home 01</NavLink></li>
                                        <li><NavLink to='/home-two'>Home 02</NavLink></li>
                                        <li><NavLink to='/home-three'>Home 03</NavLink></li>
                                        <li><NavLink to='/home-four'>Home 04</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to='/about'>ABOUT</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/feature'>FEATURES</NavLink>
                                </li>
                               
                                <li className="menu-item-has-children current-menu-item">
                                    <a href="#">BLOG</a>
                                    <ul className="sub-menu">
                                        <li><NavLink to='/blog'>BLOG</NavLink></li>
                                        <li><NavLink to='/blog-details'>BLOG DETAILS</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to='/faq'>FAQ</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'>CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- navbar end --> */}
        </>
    );
};

export default Header;