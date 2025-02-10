import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductList.module.css";
import BestSellerProducts from "../bestSellerProducts/BestSellerProducts"; // Import component sản phẩm bán chạy

const productsData = {
    "nam-linh-chi": [
        { id: 1, name: "Nấm Linh Chi Đỏ", price: "500.000đ", image: `${process.env.PUBLIC_URL}/linh_chi_2.jpg` },
        { id: 2, name: "Nấm Linh Chi Vàng", price: "600.000đ", image: `${process.env.PUBLIC_URL}/linh_chi_1.jpg`}
    ],
    "nam-dong-trung": [
        { id: 3, name: "Đông Trùng Hạ Thảo Khô", price: "1.200.000đ", image: `${process.env.PUBLIC_URL}/dong_trung_1.jpg` },
        { id: 4, name: "Đông Trùng Hạ Thảo Tươi", price: "1.500.000đ", image: `${process.env.PUBLIC_URL}/dong_trung_2.webp` }
    ],
    "nam-huong": [
        { id: 5, name: "Nấm Hương Rừng", price: "250.000đ", image: `${process.env.PUBLIC_URL}/huong_1.jpg` },
        { id: 6, name: "Nấm Hương Khô", price: "300.000đ", image: `${process.env.PUBLIC_URL}/huong_2.webp` }
    ],
    "nam-bao-ngu": [
        { id: 7, name: "Nấm Bào Ngư Xám", price: "80.000đ", image: `${process.env.PUBLIC_URL}/bao_ngu_xam.jpg`},
        { id: 8, name: "Nấm Bào Ngư Trắng", price: "90.000đ", image:`${process.env.PUBLIC_URL}/bao_ngu_trang.jpeg`}
    ]
};

const bestSellingProducts = [
    { id: 1, name: "Nấm Linh Chi Đỏ", price: "500.000đ", image: `${process.env.PUBLIC_URL}/linh_chi_2.jpg` },
    { id: 3, name: "Đông Trùng Hạ Thảo Khô", price: "1.200.000đ", image: `${process.env.PUBLIC_URL}/dong_trung_1.jpg` },
    { id: 5, name: "Nấm Hương Rừng", price: "250.000đ", image: `${process.env.PUBLIC_URL}/huong_1.jpg` },
    { id: 7, name: "Nấm Bào Ngư Xám", price: "80.000đ", image: `${process.env.PUBLIC_URL}/bao_ngu_xam.jpg` }
];

// Lấy tất cả sản phẩm
const allProducts = Object.values(productsData).flat();

const ProductList = () => {
    const { category } = useParams();
    const products = category ? productsData[category] || [] : allProducts;

    return (
        <div className={styles.productPage}>
            {/* Sản phẩm bán chạy */}
            <BestSellerProducts products={bestSellingProducts} />

            {/* Tiêu đề "Tất cả sản phẩm" */}
            <h2 className={styles.sectionTitle}>📦 Tất cả sản phẩm</h2>

            {/* Danh sách sản phẩm */}
            <div className={styles.productContainer}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <img src={product.image} alt={product.name} className={styles.productImage} />
                            <h4 className={styles.productName}>{product.name}</h4>
                            <p className={styles.productPrice}>{product.price}</p>
                        </div>
                    ))
                ) : (
                    <h3 className={styles.noProduct}>Không có sản phẩm nào</h3>
                )}
            </div>
        </div>
    );
};

export default ProductList;
