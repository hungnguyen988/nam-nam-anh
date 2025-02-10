import React from 'react';
import styles from './IntroductionPage.module.css';

const IntroductionPage = () => {
    return (
        <div className={styles.introContainer}>
            <header className={styles.introHeader}>
                <h1 className={styles.introTitle}>CHÀO MỪNG ĐẾN VỚI NẤM NAM ANH  </h1>
                <p className={styles.introSubtitle}>Khám phá sự độc đáo và chất lượng của chúng tôi</p>
            </header>

            <section className={styles.section}>
                <img src={`${process.env.PUBLIC_URL}/coso.jpg`} alt="Cơ sở sản xuất" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Cơ sở Sản xuất Hiện đại</h2>
                    <p className={styles.sectionText}>
                        Đầu năm 2024 được sự quan tâm của các cấp chính quyền cùng với niềm đam mê và khao khát được thực hiện ước mơ của mình, anh Nam đã quyết định đầu tư xây dựng thêm nhà xưởng mới với diện tích 700m2, mua sắm các trang thiết bị máy móc phục vụ cho việc sản xuất bịch và trồng nấm. Đến nay cơ sở đã sản xuất được 10.000 bịch nấm mỗi tháng. Sản lượng nấm thu được có ngày lên tới 100kg.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <img src={`${process.env.PUBLIC_URL}/nhanvien.jpg`} alt="Đội ngũ nhân viên" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Đội ngũ nhân viên chuyên nghiệp – Tận tâm vì chất lượng</h2>
                    <p className={styles.sectionText}>
                        Tại Nấm Nam Anh, chúng tôi tự hào có một đội ngũ nhân viên tận tâm, giàu kinh nghiệm và luôn đặt chất lượng lên hàng đầu. Mỗi thành viên trong cơ sở sản xuất đều được đào tạo bài bản về quy trình nuôi trồng nấm sạch, từ khâu lựa chọn giống, chăm sóc, thu hoạch đến bảo quản, đảm bảo sản phẩm đến tay khách hàng luôn đạt tiêu chuẩn an toàn và dinh dưỡng cao nhất.

                        Với tinh thần trách nhiệm và sự nhiệt huyết, đội ngũ nhân viên của chúng tôi không ngừng cải tiến kỹ thuật, ứng dụng công nghệ hiện đại để nâng cao năng suất và chất lượng sản phẩm. Chúng tôi tin rằng, sự tỉ mỉ trong từng công đoạn cùng với niềm đam mê với nghề sẽ mang đến những loại nấm tươi ngon, bổ dưỡng, góp phần nâng cao sức khỏe cho cộng đồng.

                        Sự hài lòng của khách hàng chính là động lực để Nấm Nam Anh không ngừng phát triển và hoàn thiện hơn mỗi ngày!
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <img src={`${process.env.PUBLIC_URL}/bao_ngu_nau.webp`}  alt="Cam kết chất lượng" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Cam kết Chất lượng</h2>
                    <p className={styles.sectionText}>
                        Tại Nấm Nam Anh, chúng tôi cam kết mang đến cho khách hàng những sản phẩm nấm sạch, tươi ngon và an toàn tuyệt đối. Toàn bộ quy trình nuôi trồng được thực hiện trong môi trường kiểm soát nghiêm ngặt, không sử dụng hóa chất độc hại, đảm bảo đáp ứng các tiêu chuẩn vệ sinh an toàn thực phẩm.

                        Chúng tôi lựa chọn nguồn giống chất lượng cao, áp dụng công nghệ tiên tiến và tuân thủ nghiêm ngặt các quy trình kiểm định để đảm bảo mỗi sản phẩm đều giữ được độ tươi ngon, giá trị dinh dưỡng và hương vị tự nhiên nhất. Mọi sản phẩm trước khi đến tay khách hàng đều trải qua khâu kiểm tra chặt chẽ, đảm bảo độ sạch, an toàn và đạt chuẩn chất lượng cao nhất.

                        Với phương châm “Sạch từ tâm – Chất lượng từ gốc”, chúng tôi không chỉ cung cấp nấm mà còn mang đến sự an tâm và tin tưởng cho từng bữa ăn của bạn!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default IntroductionPage;