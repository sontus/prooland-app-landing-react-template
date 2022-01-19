import React from 'react';
import BannerArea from './BannerArea';
import FactCountArea from './FactCountArea';
import FeaturedArea from './FeaturedArea';
import IntroArea from './IntroArea';
import NetworkArea from './NetworkArea';
import PricingArea from './PricingArea';
import ScreenshotArea from './ScreenshotArea';
import TestimonialArea from './TestimonialArea';
import UpcomingFeatured from './UpcomingFeatured';
import VideoArea from './VideoArea';

const HomeOne = () => {
    return (
        <>
            <BannerArea></BannerArea>
            <FeaturedArea></FeaturedArea>
            <UpcomingFeatured></UpcomingFeatured>
            <IntroArea></IntroArea>
            <FactCountArea></FactCountArea>
            <ScreenshotArea></ScreenshotArea>
            <VideoArea></VideoArea>
            <PricingArea></PricingArea>
            <NetworkArea></NetworkArea>
            <TestimonialArea></TestimonialArea>
        </>
    );
};

export default HomeOne;