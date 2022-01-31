import React from 'react';

const BlogPost = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-blog-wrap">
                            <div className="thumb">
                                <img src="assets/img/blog/1.jpg" alt="blog"/>
                            </div>
                            <div className="single-blog-post">
                                <h2 className="title">Learn the rules first</h2>
                                <div className="blog-meta">
                                    <span><span>Posted:</span> March 16, 2019</span>
                                    <span><span>By:</span> <a href="#">admin</a></span>
                                    <span><span>Category:</span><a href="#">HTML/CSS</a></span>
                                    <span><span>Comment:</span> <a href="#">20</a></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diamauris ...</p>
                                <a className="read-more-btn" href="#">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="single-blog-wrap">
                            <div className="thumb">
                                <img src="assets/img/blog/2.png" alt="blog"/>
                            </div>
                            <div className="single-blog-post">
                                <h2 className="title"> <a href="#">Subjects to ecstatic children</a></h2>
                                <div className="blog-meta">
                                    <span><span>Posted:</span> March 16, 2019</span>
                                    <span><span>By:</span> <a href="#">admin</a></span>
                                    <span><span>Category:</span><a href="#">HTML/CSS</a></span>
                                    <span><span>Comment:</span> <a href="#">20</a></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diamauris ...</p>
                                <a className="read-more-btn" href="#">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="single-blog-wrap">
                            <div className="thumb">
                                <img src="assets/img/blog/3.png" alt="blog"/>
                            </div>
                            <div className="single-blog-post">
                                <h2 className="title"> <a href="#">The perfect app showcase</a></h2>
                                <div className="blog-meta">
                                    <span><span>Posted:</span> March 16, 2019</span>
                                    <span><span>By:</span> <a href="#">admin</a></span>
                                    <span><span>Category:</span><a href="#">HTML/CSS</a></span>
                                    <span><span>Comment:</span> <a href="#">20</a></span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diamauris ...</p>
                                <a className="read-more-btn" href="#">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <nav className="blog-pagination">
                            <ul className="pagination justify-content-center text-center">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item m-0">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-4 ps-xl-4">
                        <div className="widget widget-search">
                            <form className="form-inline">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div className="widget widget-category">
                            <h4 className="widget-title">Category</h4>
                            <ul className="widget-list">
                                <li><a href="blog.html">Branding <span>(5)</span></a></li>
                                <li><a href="blog.html">UI Design  <span>(77)</span></a></li>
                                <li><a href="blog.html">Typography <span> (6)</span></a></li>
                                <li><a href="blog.html">Wordpress  <span>(11)</span></a></li>
                                <li><a href="blog.html">Development<span>(54)</span></a></li>
                                <li><a href="blog.html">Photography<span>(22)</span></a></li>
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
        </>
    );
};

export default BlogPost;