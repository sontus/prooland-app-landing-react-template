import React from 'react';

const VideoArea = () => {
    return (
        <>
            <section className="video-area text-center pd-bottom-120 mt-ng-105" style={{background: 'url(assets/img/other/2.png)'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10">
                            <div className="section-title mb-0 pb-5 text-center">
                                <h2 className="title">Description With Video</h2>
                                <p>Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her.</p>
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className="video-inner">
                                <img src="assets/img/other/video.png" alt="img"/>
                                <a className="play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><img src="assets/img/icon/play.png" alt="img"/></a>
                            </div>          
                        </div>          
                    </div>  
                </div>
            </section>
        </>
    );
};

export default VideoArea;