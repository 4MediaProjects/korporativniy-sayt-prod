import styles from '../../shared/cityPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AbakanTG = () => {
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
        if (statsRef.current && isMobile) {
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
                            ? '/yugSibiriBackground.jpg'
                            : '/yugSibiriBackground.jpg'
                    }
                    alt="yugSibiriBackground"
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
                    className={`${styles.link} ${styles.active}`}
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
                    className={styles.link}
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
                        Телеграм-канал «NotaBene»
                    </div>
                    <img
                        src={`/yugSibiriMainPicture.jpg`}
                        alt="yugSibiriMainPicture"
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
                <div className={styles.tablesContainer} ref={statsRef}>
                    <div className={styles.tablesTitle}>
                        NotaBene. Главные новости Абакана и Хакасии
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                18 542 подписчика
                            </div>
                            <div className={styles.tableRow}>
                                0,73% вовлеченность
                            </div>
                            <div className={styles.tableRow}>
                                7 827 средний охват публикации
                            </div>
                            <div className={styles.tableRow}>
                                6 606 - средний рекламный охват
                            </div>
                            <div className={styles.tableRow}>
                                36% подписчиков читают посты в первые 24 часа
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
