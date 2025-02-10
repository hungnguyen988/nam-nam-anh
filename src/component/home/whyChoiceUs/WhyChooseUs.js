import React from "react";
import styles from "./WhyChooseUs.module.css";
import { FaLeaf, FaHandsHelping, FaStar, FaSeedling, FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Tại Sao Chọn Chúng Tôi?</h2>

            <div className={styles.content}>
                {/* Hình ảnh */}
                <div className={styles.imageContainer}>
                    <img src={`${process.env.PUBLIC_URL}/whychooseus.jpg`} alt="Tại Sao Chọn Chúng Tôi" />
                </div>

                {/* Lý do */}
                <div className={styles.reasons}>
                    <div className={styles.reason}>
                        <FaLeaf className={styles.icon} />
                        <p>Sản phẩm tự nhiên, an toàn cho sức khỏe</p>
                    </div>
                    <div className={styles.reason}>
                        <FaHandsHelping className={styles.icon} />
                        <p>Hỗ trợ khách hàng tận tâm, nhiệt tình</p>
                    </div>
                    <div className={styles.reason}>
                        <FaStar className={styles.icon} />
                        <p>Chất lượng đảm bảo, đạt tiêu chuẩn cao</p>
                    </div>
                    <div className={styles.reason}>
                        <FaSeedling className={styles.icon} />
                        <p>Quy trình sản xuất hiện đại, thân thiện với môi trường</p>
                    </div>
                    <div className={styles.reason}>
                        <FaCheckCircle className={styles.icon} />
                        <p>Uy tín lâu năm trong ngành</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
