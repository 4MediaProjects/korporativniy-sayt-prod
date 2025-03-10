import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const IrkutskAvtoradio = () => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const audienceRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (audienceRef.current && isMobile) {
            audienceRef.current.scrollIntoView({
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
                    <div className={styles.title}>Иркутск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={styles.link}
                    onClick={() => navigate('/irkutsk/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/irkutsk/tg-channel')}
                >
                    Телеграм-канал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/irkutsk/vk-group')}
                >
                    Группа ВК
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/irkutsk/tv')}
                >
                    Телеканал НТС
                </button>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/irkutsk/avtoradio')}
                >
                    Авторадио Иркутск
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/irkutsk/shanson')}
                >
                    Радио Шансон Иркутск
                </button>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Авторадио Иркутск
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

                <div className={styles.tablesContainer} ref={audienceRef}>
                    <div className={styles.tablesTitle}>
                        Крупнейшая радиостанция России, с более, чем 30-летним
                        стажем работы, занимающая лидирующие позиции в рейтинге
                        станций по всей России.
                    </div>
                    <div className={styles.tablesTitle}>
                        Программы собственного производства: Иркутские новости,
                        Прогноз погоды, Автомонитор, Праздник каждый день.
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
                                        25-55 лет
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
                                        55% мужчины 44% женщины
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
                                г. Иркутск, Иркутский район, г. Тайшет
                                (население – 800 тыс. человек).
                            </div>
                            <div className={styles.tableRow}>
                                Среднесуточный охват в Иркутске
                            </div>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Охват слушателей
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                По данным Mediascope (март-апрель 2023) - 51 000
                                слушателей.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
