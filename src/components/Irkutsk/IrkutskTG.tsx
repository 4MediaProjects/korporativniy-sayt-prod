import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../shared/cityPage.module.scss';

export const IrkutskTG = () => {
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
                    src="/blankBackground.svg"
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
                    className={`${styles.link} ${styles.active}`}
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
                    <div className={styles.cardImageButtonsTitle}>
                        Телеграм-канал НТС
                    </div>
                    <img
                        src="/blankImage.svg"
                        alt="blankImage"
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
                        Официальный канал Нового телевидения Сибири. Все самое
                        важное и интересное в Иркутске и Иркутской области
                    </div>

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
                                1 324 - рекламный охват
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
