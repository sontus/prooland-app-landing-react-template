import React from 'react';

const ScreenshotArea = () => {
    return (
        <>
            <section className="screenshot-area">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="title">Our App Screenshots</h2>
                                <p>Delay rapid joy share allow age manor six. Went why far saw many knew.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="screenshot-slider slick-carousel ps-4 pe-4">
                                <div className="item">
                                    <div className="screenshot-thumb">
                                        <img src="assets/img/screenshot/01.png" alt="app"/>
                                    </div>  
                                </div>
                                <div className="item">
                                    <div className="screenshot-thumb">
                                        <img src="assets/img/screenshot/02.png" alt="app"/>
                                    </div>  
                                </div>
                                <div className="item">
                                    <div className="screenshot-thumb">
                                        <img src="assets/img/screenshot/03.png" alt="app"/>
                                    </div>  
                                </div>
                                <div className="item">
                                    <div className="screenshot-thumb">
                                        <img src="assets/img/screenshot/04.png" alt="app"/>
                                    </div>  
                                </div>
                                <div className="item">
                                    <div className="screenshot-thumb">
                                        <img src="assets/img/screenshot/05.png" alt="app"/>
                                    </div>  
                                </div>
                                <div className="item">
                                    <div className="screenshot-thumb">
                                        <img src="assets/img/screenshot/04.png" alt="app"/>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScreenshotArea;