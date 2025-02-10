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
        "/topic.jpg",
        "/anh1.jpg",
        "/anh2.png",
        "/anh3.jpg",
        "/giocha1.webp",
        "/giocha2.jpg",
        "/giocha3.jpg"
    ];

    return (
        <div>
            <ImageTopic />
            <Factory />
            <MainProduct />
            <VideoIntroduction />
            <WhyChooseUs />
            <Contact />
            <RelatedImages images={images} />
        </div>
    );
};

export default HomePage;
