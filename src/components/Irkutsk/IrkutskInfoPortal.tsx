import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const IrkutskInfoPortal = () => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const tableRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (tableRef.current && isMobile) {
            tableRef.current.scrollIntoView({
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
                            ? '/IrkutskBackground.jpg'
                            : '/IrkutskBackground.jpg'
                    }
                    alt="IrkutskBackground"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Иркутск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={`${styles.link} ${styles.active}`}
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
                    className={styles.link}
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
                    <div className={styles.cardImageButtonsTitle}>Сайт НТС</div>
                    <img
                        src={`/irkutskMainPicture.png`}
                        alt="irkutskMainPicture"
                        className={styles.image}
                    />
                    <div className={styles.buttonList}>
                        <button className={styles.orangeButton}>
                            К порталу
                        </button>
                        <button
                            className={styles.reverseOrangeButton}
                            ref={tableRef}
                        >
                            Заказать рекламу
                        </button>
                    </div>
                </div>

                <div className={styles.tablesContainer}>
                    <div className={styles.tablesTitle}>
                        Жизнь региона в режиме онлайн: информационное агентство
                        (тематика: информационный, региональный) соцсети издания
                        (ТГ, ВК, ОК, Дзен)
                    </div>

                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват аудитории</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Просмотры: более 280 000/мес.
                            </div>
                            <div className={styles.tableRow}>
                                Посетители: более 100 000/мес.
                            </div>
                            <div className={styles.tableRow}>
                                ТГ: более 6 000 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                ВК: более 53 000 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                ОК: более 2 000 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                Дзен: более 2 700 подписчиков.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
