import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const KrasnoyarskRadio = () => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const viewerReachRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (viewerReachRef.current) {
            viewerReachRef.current.scrollIntoView({
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
                            ? '/primaBackground.jpg'
                            : '/primaBackground.jpg'
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
                    className={styles.link}
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
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/krasnoyarsk/radio')}
                >
                    Радио “Красноярск Главный”
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Радио “Красноярск Главный”
                    </div>
                    <img
                        src={`/primaMainPicture.png`}
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
                <div className={styles.tablesContainer} ref={viewerReachRef}>
                    <div className={styles.tablesTitle}>
                        Одна из старейших частных радиостанций края, основана в
                        1994 году. Радиостанция является единственной со 100%
                        собственным программированием, ежечасными выпусками
                        новостей, а также с существенной долей программ
                        разговорного жанра, освещающими местную повестку.
                    </div>
                    <div className={styles.tablesTitle}>
                        70 тысяч красноярцев ежедневно слушают нашу радиостанцию
                        - это люди с активной жизненной позицией, настоящие
                        фанаты Красноярска.
                    </div>
                    <div className={styles.tablesTitle}>
                        Одной из программ, являющейся визитной карточкой эфира -
                        является утреннее шоу “Зажигание”.
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
                                        самая большая возрастная группа 30-49
                                        лет - 42%
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
                                        60% мужчины 40% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Территория вещания
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Иркутск, Иркутская область
                            </div>
                            <div className={styles.tableRow}>
                                Среднесуточный охват по данным Медиахилс – 35574
                                зрителя (январь-май 2024)
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Технический охват
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Красноярск и пригород. Передатчик 3 кВт, точка
                                вещания - мачта РТРС, умные колонки Алиса, Сбер,
                                Маруся, индустриальный медиаплеер, сайт 1028.fm
                                и иные открытые ресурсы в интернете.
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват зрителей</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Не менее 70 тыс в сутки
                            </div>
                            <div className={styles.tableRow}>
                                Reach Weekly (тыс.чел., %) - средняя аудитория
                                радиостанции в неделю 165,8 тыс чел , 17,7%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
