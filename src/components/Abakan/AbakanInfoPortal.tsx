import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';

export const AbakanInfoPortal = () => {
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
                    <div className={styles.title}>Абакан</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button className={`${styles.link} ${styles.active}`}>
                    Информационный портал
                </button>
                <button className={styles.link}>Телеграм-канал</button>
                <button className={styles.link}>Группа ВК</button>
                <button className={styles.link}>Телеканал ТВ7</button>
                <button className={styles.link}>Программа NotaBene</button>
                <button className={styles.link}>Радио «Сибирь»</button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Информационный портал «CTV7»
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
                        Портал ctv7.ru - крупнейший новостной интернет-ресурс
                        Хакасии. Оперативная и актуальная информация о жизни Юга
                        Сибири.
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Аудитория</div>
                        <div className={styles.audienceTable}>
                            <div className={styles.audienceTableContent}>
                                <div className={styles.audienceTableCell}>
                                    <div
                                        className={
                                            styles.audienceTableContentTitle
                                        }
                                    >
                                        Ядро аудитории
                                    </div>
                                    <div
                                        className={
                                            styles.audienceTableContentText
                                        }
                                    >
                                        64% 25 - 50 лет
                                    </div>
                                </div>

                                <div className={styles.audienceTableCell}>
                                    <div
                                        className={
                                            styles.audienceTableContentTitle
                                        }
                                    >
                                        Пол
                                    </div>
                                    <div
                                        className={
                                            styles.audienceTableContentText
                                        }
                                    >
                                        40% мужчины 60% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                195 829 - просмотров в среднем за месяц
                            </div>
                            <div className={styles.tableRow}>
                                70 895 - уникальных посетителей в среднем за
                                месяц
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
