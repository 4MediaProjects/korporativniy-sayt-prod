import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const KrasnoyarskTV = () => {
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
                    className={`${styles.link} ${styles.active}`}
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
                        Телеканал “ПРИМА”
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
                        Первый негосударственный телеканал в Красноярске и один
                        из первых частных в стране. Основан в 1991 году.  Сейчас
                        «Прима» это 24 часа вещания в HD в сетях всех кабельных
                        операторов Красноярска и пригорода, а также в сети
                        Ростелеком в 200 населенных пунктах Красноярского края.
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
                                        Телеканал для всей семьи, но основное
                                        ядро этой аудитории - женщины в возрасте
                                        от 20 до 55 лет, со средним или высоким
                                        доходом, и это одна из самых отзывчивых
                                        категорий среди покупателей.
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
                                Все кабельные операторы города, абоненты
                                Ростелекома в крае, стриминговые сервисы,
                                приложение для iOs и Android и другие ресурсы в
                                интернете
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват зрителей</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Не менее 40-50 тыс в сутки
                            </div>
                            <div className={styles.tableRow}>
                                Доля по медиахилс - доля канала 0,5-0,6%, доля
                                Новостей 5,0-5,5 %
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
