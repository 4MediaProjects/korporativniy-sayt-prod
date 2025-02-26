import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const JivemVNijnemVK = () => {
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
        if (audienceRef.current) {
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
                    className={styles.link}
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
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/nijniy-novgorod/vk-group')}
                >
                    Группа ВК
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Группа ВК «Живем в Нижнем»
                    </div>
                    <img
                        src={`/JivemVNijnemVK.svg`}
                        alt="JivemVNijnemVK"
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
                        Живём в Нижнем это новое интернет-СМИ. Освещаем
                        городские события и новости федерального масштаба, а
                        также обращаемся к эстетике города и его культурной
                        жизни.
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
                                        35 - 55 лет
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
                                        34% мужчины 66% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                63 000 подписчика
                            </div>
                            <div className={styles.tableRow}>
                                Средний охват за 3 месяца - 200 000
                                пользователей в месяц
                            </div>
                            <div className={styles.tableRow}>
                                Средний просмотр одного поста - 3500 просмотров
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Рекламные возможности
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Пост в паблике
                            </div>
                            <div className={styles.tableRow}>
                                Пост в паблике с закреплением публикации
                            </div>
                            <div className={styles.tableRow}>
                                История в паблике
                            </div>
                            <div className={styles.tableRow}>
                                Онлайн-трансляция в паблике
                            </div>
                            <div className={styles.tableRow}>
                                Брендирование обложки паблика
                            </div>
                            <div className={styles.tableRow}>
                                Создание клипа
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
