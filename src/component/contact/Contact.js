import React from "react";
import styles from "./Contact.module.css"; // Import CSS Module

const Contact = () => {
    return (
        <div className={styles.floatingIcons}>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="/Facebook_Logo_(2019).png" alt="Facebook" className={styles.icon} />
            </a>
            <a href="https://zalo.me/yourzalo" target="_blank" rel="noopener noreferrer">
                <img src="/Logo-Zalo-Arc.webp" alt="Zalo" className={styles.icon} />
            </a>
            {/*<a href="tel:+84901234567">*/}
            {/*    <img src="/icons/phone.png" alt="Phone" className={styles.icon} />*/}
            {/*</a>*/}
        </div>
    );
};

export default Contact;
