import React from 'react';
import styles from './IntroductionPage.module.css';

const IntroductionPage = () => {
    return (
        <div className={styles.introContainer}>
            <header className={styles.introHeader}>
                <h1 className={styles.introTitle}>CHÀO MỪNG ĐẾN VỚI ĐỨC TIẾN </h1>
                <p className={styles.introSubtitle}>Khám phá sự độc đáo và chất lượng của chúng tôi</p>
            </header>

            <section className={styles.section}>
                <img src="/coso.jpg" alt="Cơ sở sản xuất" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Cơ sở Sản xuất Hiện đại</h2>
                    <p className={styles.sectionText}>
                        Hiện nay trong xu thế hội nhập và phát triển chung của đất nước, nhu cầu của người tiêu dùng ngày càng cao nhất là các mặt hàng thực phẩm chế biến ăn liền được khách hàng đặc biệt quan tâm về chất lượng cũng như vấn đề an toàn vệ sinh thực phẩm. Xuất phát từ nhu cầu thực tế đó Hộ kinh doanh Nguyễn Văn Tiến đã nuôi ý chí xây dựng một cơ sở chuyên nghiệp, chuyên cung cấp những sản phẩm chế biến ăn nhanh vừa thơm ngon, vừa bổ dưỡng, đáp ứng những yêu cầu khắt khe về chất lượng và an toàn thực phẩm mà người tiêu dùng đặt ra. Trải qua thời gian dài nghiên cứu và thử nghiệm, Hộ kinh doanh Nguyễn Văn Tiến hân hạnh giới thiệu tới quý khách hàng dòng sản phẩm Xúc xích Đức Tiến và Giò chả Đức Tiến.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <img src="/nhanvien.jpg" alt="Đội ngũ nhân viên" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Đội ngũ Chuyên nghiệp</h2>
                    <p className={styles.sectionText}>
                        Với tác phong chuyên nghiệp, đặt quyền lợi khách hàng làm tiêu chí trên .Chúng tôi luôn nhận thức rằng, sự ủng hộ, quan tâm và góp ý của quý khách là nguồn động viên to lớn, là yếu tố quan trọng giúp chúng tôi đứng vững và phát triển trên bước đường kinh doanh của mình. Đồng thời, với đội ngũ nhân viên chuyên nghiệp và nhiệt tình, mỗi sản phẩm là tâm huyết và tấm lòng của những người dân Hà Tĩnh đưa sản phẩm đến tận tay người tiêu dùng trên toàn quốc một cách nhanh nhất, tốt nhất, phục vụ tận tình chu đáo nhất.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <img src="/xucxich1.jpg" alt="Cam kết chất lượng" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Cam kết Chất lượng</h2>
                    <p className={styles.sectionText}>
                        Xúc xích Đức Tiến được chế biến từ thịt heo kết hợp với các loại gia vị theo công thức bí truyền, mang lại hương vị và độ giòn riêng đặc trưng cho sản phẩm. Sản phẩm được sản xuất trên dây chuyền công nghệ hiện đại, hoàn toàn không sử dụng hóa chất tạo giòn dai công nghiệp, không sử dụng phẩm màu, do đó quý khách hàng hoàn toàn yên tâm khi sử dụng. Với Giò chả, Xúc xích Đức Tiến, bạn có thể chế biến nhiều món ăn từ đơn giản đến phức tạp một cách nhanh chóng. Sản phẩm giúp bạn tiết kiệm tối đa thời gian nấu nướng mà vẫn có món ăn nhanh thơm ngon, bổ dưỡng. Đồng thời, Giò chả, xúc xích Đức Tiến được đóng gói tiện lợi và phù hợp với các bữa ăn nhanh, góp phần cho bữa cơm của bạn thêm ngon miệng và phong phú.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default IntroductionPage;