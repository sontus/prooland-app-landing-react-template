import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div class="breadcrumb-area water-effect jquery-ripples">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-inner text-center">
                                <h1 class="page-title">Single Blog</h1>
                                <ul class="page-list">
                                    <li><NavLink to ="/">Home</NavLink><i class="fa fa-angle-double-right" aria-hidden="true"></i></li>
                                    <li>Blog</li>
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