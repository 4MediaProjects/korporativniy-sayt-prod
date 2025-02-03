import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
export const KrasnoyarskTG = () => {
    const [isMobile, setIsMobile] = useState(false);

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
                        isMobile ? 'blankBackground.svg' : 'blankBackground.svg'
                    }
                    alt="blankBackground"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Красноярск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button className={styles.link}>Информационный портал</button>
                <button className={`${styles.link} ${styles.active}`}>
                    Телеграм-канал
                </button>
                <button className={styles.link}>Группа ВК</button>
                <button className={styles.link}>Телеканал “ПРИМА”</button>
                <button className={styles.link}>
                    Радио “Красноярск Главный”
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Телеграм-канал «Прима»
                    </div>
                    <img
                        src={`blankImage.svg`}
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
                        «Прима» — самые актуальные и интересные события
                        Красноярска и края.
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                11 671 подписчик
                            </div>
                            <div className={styles.tableRow}>
                                0,96% вовлеченность
                            </div>
                            <div className={styles.tableRow}>
                                3 232 – средний охват публикации
                            </div>
                            <div className={styles.tableRow}>
                                2 656 - рекламный охват
                            </div>
                            <div className={styles.tableRow}>
                                23% подписчиков читают посты в первые 24 часа
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
                            <div className={styles.tableRow}>
                                Новостной\информационный сюжет
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
