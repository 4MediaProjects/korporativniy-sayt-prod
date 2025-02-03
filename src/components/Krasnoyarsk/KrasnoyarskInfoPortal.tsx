import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const KrasnoyarskInfoPortal = () => {
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
                    <div className={styles.title}>Красноярск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/krasnoyarsk/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/krasnoyarsk/tg-channel')}
                >
                    Телеграм-канал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/krasnoyarsk/vk-group')}
                >
                    Группа ВК
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/krasnoyarsk/tv')}
                >
                    Телеканал “ПРИМА”
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/krasnoyarsk/radio')}
                >
                    Радио “Красноярск Главный”
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Информационный портал «Город Прима»
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
                        “ГородПрима” - городской портал о Красноярске и
                        окрестностях. Новости об общественно-культурной жизни
                        мегаполиса
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
                                        20 - 50 лет
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
                                        30% мужчины 70% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                230 000 - просмотров в среднем за месяц
                            </div>
                            <div className={styles.tableRow}>
                                150 000 уникальных посетителей в среднем за
                                месяц (liveinternet)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
