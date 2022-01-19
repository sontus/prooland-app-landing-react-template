import React from 'react';

const BannerArea = () => {
    return (
        <>
        <section className="banner-area-3" style={{backgroundImage: 'url(assets/img/banner/bg-3.png)'}}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-5 d-none d-lg-block">
                        <img src="assets/img/banner/1.png" alt="img"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-sm-10 align-self-center">
                        <div className="banner-inner">
                            <h1>A Perfect Landing Page to Present Your App</h1>
                            <p>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection</p>
                            <a href="" className="btn btn-app"><img src="assets/img/btn/goggle-btn-transparent.png" alt="img"/></a>
                            <a className="btn btn-app active m-0" href="index.html"><img src="assets/img/btn/app-store-btn-transparent.png" alt="img"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BannerArea;