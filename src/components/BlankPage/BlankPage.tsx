import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const BlankPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
                    <div className={styles.title}>Название города</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/blank')}
                >
                    Информационный портал
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Информационный портал
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
                <div className={styles.tablesContainer}>
                    <div className={styles.tablesTitle}>
                        Все самое важное и интересное
                    </div>
                    <div className={styles.tableContainer}></div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                4 942 подписчика
                            </div>
                            <div className={styles.tableRow}>
                                1,9% вовлеченность
                            </div>
                            <div className={styles.tableRow}>
                                1 202 – средний охват публикации
                            </div>
                            <div className={styles.tableRow}>
                                1324 - рекламный охват
                            </div>
                            <div className={styles.tableRow}>
                                27% подписчиков читают посты в первые 24 часа
                                после публикации
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Рекламные возможности
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Пост в канале (текст и оформление заказчика или
                                наш пост по ТЗ заказчика)
                            </div>
                            <div className={styles.tableRow}>
                                Репост публикации заказчика
                            </div>
                            <div className={styles.tableRow}>
                                Нативная реклама (упоминание в наших постах
                                (бренд, персона) или ссылка на материалы
                                заказчика в наших постах)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
