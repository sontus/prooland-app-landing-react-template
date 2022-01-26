import React from 'react';
import NetworkArea from '../HomeOne/NetworkArea';
import SubscribeArea from '../HomeOne/SubscribeArea';
import Banner from './Banner';
import FeatureArea from './FeatureArea';
import Intro from './Intro';
import UpcommingFeatureArea from './UpcommingFeatureArea';

const Feature = () => {
    return (
        <>
            <Banner></Banner>
            <FeatureArea></FeatureArea>
            <UpcommingFeatureArea></UpcommingFeatureArea>
            <Intro></Intro>
            <NetworkArea></NetworkArea>
            <SubscribeArea></SubscribeArea>
        </>
    );
};

export default Feature;