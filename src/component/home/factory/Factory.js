import React from "react";
import { Link } from "react-router-dom";
import styles from "./Factory.module.css";

const Factory = () => {
    return (
        <div className={styles.imageDetailContainer}>
            <div className={styles.imageDetailImage}>
                <img src={`${process.env.PUBLIC_URL}/coso.jpg`} alt="Cơ sở sản xuất" />
            </div>
            <div className={styles.imageDetailDescription}>
                <h2>CƠ SỞ SẢN XUẤT NẤM NAM ANH</h2>
                <p>
                    Sản phẩm“NẤM BÀO NAM ANH” không chỉ là tâm huyết của anh Nam mà còn là dự án để cải thiện tình hình kinh tế của địa phương tận dụng được nguồn lao động tại chỗ, phát triển mô hình khởi nghiệp để từ đó nhân rộng và liên kết mô hình trồng nấm bào ngư trên địa bàn huyện Kỳ Anh. Sau quá trình tham khảo, học hỏi và tham gia các khóa tập huấn về mô hình xây dựng nhà Nấm. Dự án “NẤM BÀO NAM ANH” được triển khai thực hiện từ năm 2021, nhà trại trồng nấm ban đầu với diện tích 500m2 được thiết kế đảm bảo không gian thoáng mát để trồng nấm, cài đặt cửa sổ, lưới thông gió để tạo luồng gió trong nhà trại giúp cung cấp ôxy và kiểm soát độ ẩm trong môi trường trồng nấm, nhiệt độ và độ ẩm trong nhà trại được kiểm soát tốt nhất để nấm có thể phát triển một hệ tơ tốt. Với quy mô của cơ sở định kỳ trồng khoảng 5.000 – 10.000 bịch phôi nấm bào ngư để có nguồn nấm sạch thu hoạch mỗi ngày. Với 5.000 bịch phôi, mỗi ngày cơ sở thu hoạch từ 30 - 40kg nấm bào ngư, bán với giá giao động từ 35.000 - 40.000 đồng/kg.
                </p>
                <Link to="/introduce" className={styles.readMore}>Xem thêm</Link>
            </div>
        </div>
    );
};

export default Factory;
