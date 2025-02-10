import React from "react";
import Flickity from "react-flickity-component";
import styles from "./Describe.module.css"; // Import CSS Module
import "flickity/css/flickity.css"; // Import CSS của Flickity

const flickityOptions = {
    cellAlign: "center",
    imagesLoaded: true,
    lazyLoad: 1,
    freeScroll: false,
    wrapAround: true,
    autoPlay: 6000,
    pauseAutoPlayOnHover: true,
    prevNextButtons: true,
    contain: true,
    adaptiveHeight: true,
    dragThreshold: 10,
    percentPosition: true,
    pageDots: true,
    rightToLeft: false,
    draggable: true,
    selectedAttraction: 0.1,
    parallax: 0,
    friction: 0.6,
};

const ImageSlider = () => {
    return (
        <div className={styles.sliderContainer}>
            <Flickity options={flickityOptions} className={styles.carousel}>
                <div className={styles.carouselCell}>
                    <img
                        src="https://damynghedaitan.com/wp-content/uploads/2024/08/Screenshot-2024-08-29-155204.png"
                        alt="Slider"
                    />
                </div>
            </Flickity>
        </div>
    );
};

export default ImageSlider;
