import React from "react";
import styles from "./BestSellerProducts.module.css"; // Import CSS module

const BestSellerProducts = ({ products }) => {
    return (
        <div className={styles.bestSellerSection}>
            <h2 className={styles.sectionTitle}>🔥 Sản phẩm bán chạy</h2>
            <div className={styles.productContainer}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h4 className={styles.productName}>{product.name}</h4>
                        <p className={styles.productPrice}>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellerProducts;
