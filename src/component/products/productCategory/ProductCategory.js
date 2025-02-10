import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCategory.module.css"; // CSS module

const ProductCategory = () => {
    const categories = [
        { name: "Nấm Linh Chi", path: "nam-linh-chi" },
        { name: "Nấm Đông Trùng", path: "nam-dong-trung" },
        { name: "Nấm Hương", path: "nam-huong" },
        { name: "Nấm Bào Ngư", path: "nam-bao-ngu" }
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
