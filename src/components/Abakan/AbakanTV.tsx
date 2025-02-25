import styles from '../../shared/cityPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AbakanTV = () => {
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
                    <div className={styles.title}>Абакан</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/tg-channel')}
                >
                    Телеграм-канал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/vk-group')}
                >
                    Группа ВК
                </button>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/abakan/tv')}
                >
                    Телеканал ТВ7
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/notabene')}
                >
                    Программа NotaBene
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/radio')}
                >
                    Радио «Сибирь»
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Телеканал ТВ7
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
                        Местный круглосуточный телеканал, который ориентируется
                        на интересы жителей
                    </div>
                    <div className={styles.tablesTitle}>
                        - дата основания: 1996 год, 
                    </div>
                    <div className={styles.tablesTitle}>
                        - с 2020 года 100% самопрограммируемый
                    </div>
                    <div className={styles.tablesTitle}>
                        - территория вещания: республика Хакасия
                    </div>
                    <div className={styles.tablesTitle} ref={statsRef}>
                        - технический охват: 560 тыс.чел
                    </div>
                    <div className={styles.tablesTitle}>
                        - телеканал доступен в кабельных и IPTV сетях
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
                                        Мужчины и женщины в возрасте 45-65 лет,
                                        со средним или высоким доходом, умные
                                        потребители, которые знают толк в
                                        товарах и услугах.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Технический охват телеканала
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                г. Абакан, Республика Хакасия, Юг Кр. Края
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват зрителей</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Среднесуточный показатель просмотров канала: ~
                                58 660
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
