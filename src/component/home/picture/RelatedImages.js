import React, { useState } from "react";
import styles from "./RelatedImages.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon mũi tên

const RelatedImages = ({ images }) => {
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 4;

    const prevImages = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const nextImages = () => {
        if (startIndex + imagesPerPage < images.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className={styles.relatedImagesContainer}>
            <h2 className={styles.title}>Các Hình Ảnh Liên Quan</h2>
            <div className={styles.imageWrapper}>
                <button
                    className={`${styles.navButton} ${startIndex === 0 ? styles.disabled : ""}`}
                    onClick={prevImages}
                    disabled={startIndex === 0}
                >
                    <FaChevronLeft />
                </button>

                <div className={styles.imageList}>
                    {images.slice(startIndex, startIndex + imagesPerPage).map((img, index) => (
                        <div key={index} className={styles.imageItem}>
                            <img src={img} alt={`Related ${index}`} />
                        </div>
                    ))}
                </div>

                <button
                    className={`${styles.navButton} ${(startIndex + imagesPerPage >= images.length) ? styles.disabled : ""}`}
                    onClick={nextImages}
                    disabled={startIndex + imagesPerPage >= images.length}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default RelatedImages;
