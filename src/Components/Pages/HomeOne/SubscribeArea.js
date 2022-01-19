import React from 'react';

const SubscribeArea = () => {
    return (
        <>
           <section className="subscribe-area pd-top-140 pd-bottom-150 shape-1">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-5 offset-xl-1 col-sm-10 align-self-center">
                        <div className="section-title mb-0 pb-5 text-center text-lg-start">
                            <h2 className="title">Latest Update And New Offers Notification</h2>
                            <p>Delay rapid joy share allow age manor six. Went why far saw many</p>
                        </div>
                        <div className="single-subscribe-wrap">
                            <input type="text" placeholder="Email address"/>
                            <button className="btn btn-black">SUBSCRIBE</button>
                        </div>                  
                    </div>
                    <div className="col-lg-6 col-xl-5 offset-xl-1 d-none d-lg-block align-self-end">
                        <div className="thumb span3 wow bounceInRight">
                            <img src="assets/img/other/10.png" alt="img"/>
                        </div>
                    </div>
                </div>   
            </div> 
        </section> 
        </>
    );
};

export default SubscribeArea;