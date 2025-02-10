import React from "react";
import ImageTopic from "../topic/ImageTopic";
import Factory from "../factory/Factory";
import MainProduct from "../main_product/MainProduct";
import VideoIntroduction from "../video/VideoIntroduction";
import WhyChooseUs from "../whyChoiceUs/WhyChooseUs";
import Contact from "../../contact/Contact";
import RelatedImages from "../picture/RelatedImages";

const HomePage = () => {
    const images = [
        `${process.env.PUBLIC_URL}/bao_ngu_nhat.jpg`,
        `${process.env.PUBLIC_URL}/bao_ngu_nau.webp`,
        `${process.env.PUBLIC_URL}/bao_ngu_trang.jpeg`,
        `${process.env.PUBLIC_URL}/bao_ngu_xam.jpg`,
        `${process.env.PUBLIC_URL}/huong_2.webp`,
        `${process.env.PUBLIC_URL}/huong_1.jpg`,
        `${process.env.PUBLIC_URL}/huong_3.png`
    ];


    return (
        <div>
            <ImageTopic />
            <Factory />
            <MainProduct />
            {/*<VideoIntroduction />*/}
            <WhyChooseUs />
            <Contact />
            <RelatedImages images={images} />
        </div>
    );
};

export default HomePage;
