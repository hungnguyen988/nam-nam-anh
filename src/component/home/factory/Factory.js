import React from "react";
import { Link } from "react-router-dom";
import styles from "./Factory.module.css";

const Factory = () => {
    return (
        <div className={styles.imageDetailContainer}>
            <div className={styles.imageDetailImage}>
                <img src="/coso.jpg" alt="Cơ sở sản xuất" />
            </div>
            <div className={styles.imageDetailDescription}>
                <h2>CƠ SỞ SẢN XUẤT XÚC XÍCH, GIÒ CHẢ ĐỨC TIẾN</h2>
                <p>
                    Lấy cảm hứng từ những bữa cơm ngon, tiện lợi, tiết kiệm thời gian và quyết tâm đồng hành cùng những bà nội trợ thông thái, sản phẩm Giò chả, xúc xích Đức Tiến có thành phần chính từ thịt nạc heo được tuyển chọn kỹ càng về nguồn gốc và chất lượng tại vùng đất Kỳ Anh, Hà Tĩnh, đảm bảo không có dư lượng kháng sinh và đặc biệt không sử dụng hàn the. Dùng sản phẩm giò chả, xúc xích cùng với các món ăn hằng ngày tăng phần ngon miệng cho bữa cơm gia đình. Với công nghệ chế biến hiện đại kết hợp với phương thức gia truyền đảm bảo cung cấp ra thị trường sản phẩm giò lụa thơm ngon, tuyệt vời, đảm bảo vệ sinh an toàn thực phẩm.
                </p>
                <Link to="/introduce" className={styles.readMore}>Xem thêm</Link>
            </div>
        </div>
    );
};

export default Factory;
