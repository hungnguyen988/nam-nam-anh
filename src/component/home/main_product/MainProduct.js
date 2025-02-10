import React from "react";
import styles from './MainProduct.module.css'
import {Link} from "react-router-dom";

const MainProduct = () => {
    return (
        <div className={styles.imageDetailContainer}>
            <div className={styles.imageDetailImage}>
                <img src={`${process.env.PUBLIC_URL}/mainproduct.jpg`} alt="image" />
            </div>
            <div className={styles.imageDetailDescription}>
                <h2>SẢN PHẨM CHÍNH </h2>
                <p>

                    Thị trường phân phối của sản phẩm NẤM BÀO NGƯ NAM ANH  thông qua các kênh bán lẻ và đặt hàng online, sản phẩm cũng được phân phối tại các chợ truyền thống ở địa phương, cung cấp cho các quán ăn tại huyện và thị xã Kỳ Anh, hiện tại với quy mô sản xuất mở rộng cơ sở đang xây dựng các đại lý để phân phối đến các khu vực lân cận như Thành phố Hà Tĩnh, huyện Cẩm Xuyên và các huyện lân cận. Sản phẩm nấm bào ngư của cơ sở Nam Anh dần dần khẳng định vị trí trên thị trường tiêu dùng tại địa phương.
                </p>
                <Link to="/products" className={styles.readMore}>Xem thêm sản phẩm</Link>
            </div>
        </div>
    );
};

export default MainProduct;