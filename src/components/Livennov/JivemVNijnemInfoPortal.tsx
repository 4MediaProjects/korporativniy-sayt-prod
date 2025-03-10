import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const JivemVNijnemInfoPortal = () => {
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
                            ? '/jivemVNijnemBackGroundMobile.svg'
                            : '/jivemVNijnemBackGround.svg'
                    }
                    alt="jivemVNijnem"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <img
                        src="/jivemVnijnem.svg"
                        alt="jivemVNijnem"
                        className={styles.imageTitle}
                    />
                    <div className={styles.title}>Нижний Новгород</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/nijniy-novgorod/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/nijniy-novgorod/tg-channel')}
                >
                    Телеграм-канал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/nijniy-novgorod/vk-group')}
                >
                    Группа ВК
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Информационный портал «Живем в Нижнем»
                    </div>
                    <img
                        src={`/jivemVNijnemInfoPortal.svg`}
                        alt="jivemVNijnemInfoPortal"
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
                        «Живем в Нижнем» — один из крупнейших информационных
                        порталов Нижнего Новгорода и Нижегородской области.
                        Каждый день рассказываем о событиях в политике,
                        экономике, спорте и других сферах жизни.
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
                                        Возраст: 50% от 25 до 50
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
                                        22% мужчины 78% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                2 631 877 - просмотров в среднем за месяц
                            </div>
                            <div className={styles.tableRow}>
                                992 577 - уникальных посетителей в среднем за
                                месяц
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
