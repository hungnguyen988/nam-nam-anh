import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductCategory from "../productCategory/ProductCategory";
import ProductList from "../productList/ProductList";
import styles from "./ProductPage.module.css";
import BestSellerProducts from "../bestSellerProducts/BestSellerProducts"; // CSS module

const ProductPage = () => {



    return (
        <div className={styles.productPage}>

            <ProductCategory />
            <Routes>
                {/* Mặc định chuyển đến trang tất cả sản phẩm */}
                <Route path="/" element={<Navigate to="all" />} />
                <Route path="all" element={<ProductList />} />
                <Route path=":category" element={<ProductList />} />
            </Routes>
        </div>
    );
};

export default ProductPage;
