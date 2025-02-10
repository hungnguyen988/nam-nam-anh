import React from "react";
import { Link } from "react-router-dom";  // Import Link từ react-router-dom
import styles from "./HeaderComponent.module.css";

const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <img src="/logocha.png" alt="Logo" />
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>TRANG CHỦ</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/products" className={styles.navLink}>SẢN PHẨM</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/introduce" className={styles.navLink}>GIỚI THIỆU</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
