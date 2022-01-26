import React from 'react';
import FactCountArea from '../HomeOne/FactCountArea';
import IntroArea from '../HomeOne/IntroArea';
import NetworkArea from '../HomeOne/NetworkArea';
import ScreenshotArea from '../HomeOne/ScreenshotArea';
import SubscribeArea from '../HomeOne/SubscribeArea';
import TestimonialArea from '../HomeOne/TestimonialArea';
import Banner from './Banner';

const About = () => {
    return (
        <>
            <Banner></Banner>
            <NetworkArea></NetworkArea>
            <IntroArea></IntroArea>
            <FactCountArea></FactCountArea>
            <ScreenshotArea></ScreenshotArea>
            <TestimonialArea></TestimonialArea>
            <SubscribeArea></SubscribeArea>
        </>
    );
};

export default About;