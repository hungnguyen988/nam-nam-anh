import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCategory.module.css"; // CSS module

const ProductCategory = () => {
    const categories = [
        { name: "Xúc Xích Heo", path: "xuc-xich-heo" },
        { name: "Xúc Xích Bò", path: "xuc-xich-bo" },
        { name: "Xúc Xích Gà", path: "xuc-xich-ga" },
        { name: "Giò Lụa", path: "gio-lua" },
        { name: "Giò Bò", path: "gio-bo" },
        { name: "Giò Thủ", path: "gio-thu" }
    ];

    return (
        <div className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>Danh Mục Sản Phẩm</h3>
            <ul className={styles.categoryList}>
                {categories.map((category) => (
                    <li key={category.path}>
                        <Link to={`/products/${category.path}`} className={styles.categoryLink}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCategory;
