import React from "react";
import styles from './MainProduct.module.css'
import {Link} from "react-router-dom";

const MainProduct = () => {
    return (
        <div className={styles.imageDetailContainer}>
            <div className={styles.imageDetailImage}>
                <img src="/xucxich3.jpg" alt="image" />
            </div>
            <div className={styles.imageDetailDescription}>
                <h2>SẢN PHẨM CHÍNH </h2>
                <p>

                    Xúc xích Đức Tiến được chế biến từ thịt heo kết hợp với các loại gia vị theo công thức bí truyền, mang lại hương vị và độ giòn riêng đặc trưng cho sản phẩm. Sản phẩm được sản xuất trên dây chuyền công nghệ hiện đại, hoàn toàn không sử dụng hóa chất tạo giòn dai công nghiệp, không sử dụng phẩm màu, do đó quý khách hàng hoàn toàn yên tâm khi sử dụng. Với Giò chả, Xúc xích Đức Tiến, bạn có thể chế biến nhiều món ăn từ đơn giản đến phức tạp một cách nhanh chóng. Sản phẩm giúp bạn tiết kiệm tối đa thời gian nấu nướng mà vẫn có món ăn nhanh thơm ngon, bổ dưỡng. Đồng thời, Giò chả, xúc xích Đức Tiến được đóng gói tiện lợi và phù hợp với các bữa ăn nhanh, góp phần cho bữa cơm của bạn thêm ngon miệng và phong phú.
                </p>
                <Link to="/products" className={styles.readMore}>Xem thêm sản phẩm</Link>
            </div>
        </div>
    );
};

export default MainProduct;