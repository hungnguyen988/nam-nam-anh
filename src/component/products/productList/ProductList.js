import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductList.module.css";
import BestSellerProducts from "../bestSellerProducts/BestSellerProducts"; // Import component sản phẩm bán chạy

const productsData = {
    "xuc-xich-heo": [
        { id: 1, name: "Xúc Xích Heo Truyền Thống", price: "120.000đ", image: "/xuc_xich_1.jpg" },
        { id: 2, name: "Xúc Xích Heo Cay", price: "130.000đ", image: "/xuc_xich_2.jpg" }
    ],
    "xuc-xich-bo": [
        { id: 3, name: "Xúc Xích Bò Tươi", price: "150.000đ", image: "/xuc_xich_bo_1.jpg" },
        { id: 4, name: "Xúc Xích Bò Hun Khói", price: "170.000đ", image: "/xuc_xich_bo_2.jpg" }
    ],
    "xuc-xich-ga": [
        { id: 5, name: "Xúc Xích Gà Thịt Thật", price: "110.000đ", image: "/xuc_xich_ga_1.jpg" },
        { id: 6, name: "Xúc Xích Gà Cay", price: "120.000đ", image: "/xuc_xich_ga_2.jpg" }
    ],
    "gio-lua": [
        { id: 7, name: "Giò Lụa Truyền Thống", price: "180.000đ", image: "/gio_lua_1.jpg" },
        { id: 8, name: "Giò Lụa Ít Mỡ", price: "190.000đ", image: "/gio_lua_2.jpg" }
    ],
    "gio-bo": [
        { id: 9, name: "Giò Bò Nguyên Chất", price: "200.000đ", image: "/gio_bo_1.jpg" },
        { id: 10, name: "Giò Bò Đặc Biệt", price: "220.000đ", image: "/gio_bo_2.jpg" }
    ],
    "gio-thu": [
        { id: 11, name: "Giò Thủ Gói Lá Chuối", price: "160.000đ", image: "/gio_thu_1.webp" },
        { id: 12, name: "Giò Thủ Gói Hút Chân Không", price: "170.000đ", image: "/gio_thu_2.jpg" }
    ]
};

const bestSellingProducts = [
    { id: 1, name: "Xúc Xích Heo Truyền Thống", price: "120.000đ", image: "/xuc_xich_1.jpg" },
    { id: 3, name: "Xúc Xích Bò Tươi", price: "150.000đ", image: "/xuc_xich_bo_1.jpg" },
    { id: 7, name: "Giò Lụa Truyền Thống", price: "180.000đ", image: "/gio_lua_1.jpg" },
    { id: 9, name: "Giò Bò Nguyên Chất", price: "200.000đ", image: "/gio_bo_1.jpg" }
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
            <h2 className={styles.sectionTitle}>📦 Danh sách sản phẩm</h2>

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
