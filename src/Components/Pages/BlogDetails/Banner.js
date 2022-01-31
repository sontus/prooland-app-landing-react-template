import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="breadcrumb-area water-effect jquery-ripples">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-center">
                                <h1 className="page-title">Blog Details</h1>
                                <ul className="page-list">
                                    <li><a href="index.html">Home</a><i className="fa fa-angle-double-right" aria-hidden="true"></i></li>
                                    <li><a href="blog.html">Blog</a><i className="fa fa-angle-double-right" aria-hidden="true"></i></li>
                                    <li>Blog Details</li>
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