import React from 'react';
import SubscribeArea from '../HomeOne/SubscribeArea';
import TestimonialArea from '../HomeOne/TestimonialArea';

import BannerArea from './BannerArea';
import Discount from './Discount';
import Feature from './Feature';
import FeatureArea from './FeatureArea';
import IntroArea from './IntroArea';
import NetworkArea from './NetworkArea';
import Product from './Product';
import UpCommingFeature from './UpCommingFeature';
import VideoArea from './VideoArea';

const HomeTwo = () => {
    return (
        <>
        <div className="bg-image" style={{ background: "url(assets/img/banner/bg-2.png)"}}>
            <BannerArea></BannerArea>
            <FeatureArea></FeatureArea>
        </div>
        <div className="bg-image-2" style={{ background: "url(assets/img/other/5.png)"}}>
            <UpCommingFeature></UpCommingFeature>
            <IntroArea></IntroArea>
            <VideoArea></VideoArea>
        </div>
        <NetworkArea></NetworkArea>
        <Feature></Feature>
        <div className="bg-image-3" style={{ background: "url(assets/img/other/9.png)"}}>
            <Product></Product>
            <Discount></Discount>
        </div>
        <TestimonialArea></TestimonialArea>
        <SubscribeArea></SubscribeArea>
        </>
    );
};

export default HomeTwo;