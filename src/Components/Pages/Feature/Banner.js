import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className="breadcrumb-area water-effect jquery-ripples">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h1 className="page-title">Featured</h1>
                                <ul className="page-list">
                                    <li><NavLink to="/">Home</NavLink><i className="fa fa-angle-double-right" aria-hidden="true"></i></li>
                                    <li>Featured</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;