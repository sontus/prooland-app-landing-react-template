import React from 'react';

const SingleBlog = () => {
    return (
        <>
            <div className="single-blog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="thumb">
                                <img src="assets/img/blog/1.jpg" alt="blog"/>
                            </div>
                            <div className="single-blog-post px-0">
                                <h2 className="title"><a href="blog-details.html">Learn the rules first</a></h2>
                                <div className="blog-meta">
                                    <span><span>Posted:</span> March 16, 2019</span>
                                    <span><span>By:</span> <a href="#">admin</a></span>
                                    <span><span>Category:</span><a href="#">HTML/CSS</a></span>
                                    <span><span>Comment:</span> <a href="#">20</a></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>
                                <blockquote className="blockquote">
                                    <p className="mb-0">Dectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                    <footer className="text-end">Tanvir Hossen</footer>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>
                                <div className="blog-share">
                                    <div className="tag d-inline-flex">
                                        <a className="common-btn" href="#">Business</a>
                                        <a className="common-btn" href="#">Advisor</a>
                                    </div>
                                    <div className="share text-right d-inline-flex align-items-center">
                                        <span>Share : </span>
                                        <ul className="d-inline-flex">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-comment">
                                    <div className="title">
                                        3 Comments
                                    </div>
                                    <div className="media">
                                        <img src="assets/img/blog/comment/1.png" alt="comment"/>
                                        <div className="media-body">
                                            <h5>Omar Elnagar</h5>
                                            <span className="date">Feb 11, 2015 - 08:07 pm</span>
                                            <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. </p>
                                            <a className="read-more-btn" href="#">Read More <i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="media nesting">
                                        <img src="assets/img/blog/comment/2.png" alt="comment"/>
                                        <div className="media-body">
                                            <h5>Omar Elnagar</h5>
                                            <span className="date">Feb 11, 2015 - 08:07 pm</span>
                                            <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. </p>
                                            <a className="read-more-btn" href="#">Read More <i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <img src="assets/img/blog/comment/3.png" alt="comment"/>
                                        <div className="media-body">
                                            <h5>Omar Elnagar</h5>
                                            <span className="date">Feb 11, 2015 - 08:07 pm</span>
                                            <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. </p>
                                            <a className="read-more-btn" href="#">Read More <i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-comment-form">
                                    <div className="title">
                                        Leave your comment
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Your Email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Your Message" rows="8"></textarea>
                                        </div>
                                        
                                        <button type="submit" className="common-btn">SEND COMMENT</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!--Widget-area--> */}
                        <div className="col-lg-4 ps-4">
                            <div className="widget widget-search">
                                <form className="form-inline">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="widget widget-category">
                                <h4 className="widget-title">Category</h4>
                                <ul className="widget-list">
                                    <li><a href="blog-details.html">Branding <span>(5)</span></a></li>
                                    <li><a href="blog-details.html">UI Design  <span>(77)</span></a></li>
                                    <li><a href="blog-details.html">Typography <span> (6)</span></a></li>
                                    <li><a href="blog-details.html">Wordpress  <span>(11)</span></a></li>
                                    <li><a href="blog-details.html">Development<span>(54)</span></a></li>
                                    <li><a href="blog-details.html">Photography<span>(22)</span></a></li>
                                </ul>
                            </div>
                            <div className="widget widget-trending-post">
                                <h4 className="widget-title">Trending Post</h4>
                                <div className="widget-media">
                                    <div className="thumb">
                                        <img src="assets/img/blog/01.jpg" alt="widget"/>
                                    </div>
                                    <div className="media-body">
                                        <h3><a className="media-title" href="#">Outstanding Blog Post</a></h3>
                                        <span className="date">December 17, 2019</span>
                                    </div>
                                </div>
                                <div className="widget-media">
                                    <div className="thumb">
                                        <img src="assets/img/blog/02.jpg" alt="widget"/>
                                    </div>
                                    <div className="media-body">
                                        <h3><a className="media-title" href="#">Outstanding Blog Post</a></h3>
                                        <span className="date">December 17, 2019</span>
                                    </div>
                                </div>
                                <div className="widget-media">
                                    <div className="thumb">
                                        <img src="assets/img/blog/03.jpg" alt="widget"/>
                                    </div>
                                    <div className="media-body">
                                        <h3><a className="media-title" href="#">Outstanding Blog Post</a></h3>
                                        <span className="date">December 17, 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget-social-icon">
                                <h4 className="widget-title">Follow Us</h4>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;