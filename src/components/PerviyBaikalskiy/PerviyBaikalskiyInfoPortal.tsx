import styles from '../../shared/cityPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const PerviyBaikalskiyInfoPortal = () => {
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();
    const statsRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (statsRef.current) {
            statsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <img
                    src={
                        isMobile
                            ? '/blankBackground.svg'
                            : '/blankBackground.svg'
                    }
                    alt="blankBackground"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Первый Байкальский</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/perviyBaikalskiy/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/perviyBaikalskiy/avtoradio')}
                >
                    Авторадио
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/perviyBaikalskiy/shanson')}
                >
                    Шансон
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Информационный потал «Первый Байкальский»
                    </div>
                    <img
                        src={`/blankImage.svg`}
                        alt="blankImage"
                        className={styles.image}
                    />
                    <div className={styles.buttonList}>
                        <button className={styles.orangeButton}>
                            К порталу
                        </button>
                        <button className={styles.reverseOrangeButton}>
                            Заказать рекламу
                        </button>
                    </div>
                </div>
                <div className={styles.tablesContainer} ref={statsRef}>
                    <div className={styles.tablesTitle}>
                        Первый Байкальский — это проект о Байкале, созданный
                        людьми, которые живут в этом регионе и имеют глубокие
                        знания о нем. С 2017 года делимся лайфхаками для
                        самостоятельных путешествий, малоизвестными фактами об
                        озере и советами по экологичному образу жизни. Среди
                        авторов проекта — путешественники, трэвел-блогеры,
                        экологи и представители коренных народов.
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Посетители: более 25 000/мес.
                            </div>
                            <div className={styles.tableRow}>
                                ТГ: более 6 000 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                ВК: более 10 000 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                Дзен: более 9 000 подписчиков.
                            </div>
                            <div className={styles.tableRow}>
                                По статистике LiveInternet, «Первый Байкальский»
                                занимает 58-70 позицию в рейтинге туристических
                                сайтов России из более чем 2 000, по Иркутской
                                области 1 позицию среди тематических сайтов.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
