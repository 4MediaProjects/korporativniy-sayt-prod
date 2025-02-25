import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const BratskVK = () => {
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
                    src="/bratskBackground.svg"
                    alt="bratskBackground"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Братск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/tg-channel')}
                >
                    Телеграм-канал
                </button>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/bratsk/vk-group')}
                >
                    Группа ВК
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/bratsk-24')}
                >
                    Телеканал «БСТ 24»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/sts')}
                >
                    Телеканал СТС
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/domashniy')}
                >
                    Телеканал Домашний
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/tvc')}
                >
                    Телеканал ТВЦ
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/evropa-plus')}
                >
                    Радио «Европа плюс Братск»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/shanson')}
                >
                    Радио «Шансон в Братске»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/umorfm')}
                >
                    Радио «Юмор FM»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/pifm')}
                >
                    Радио «Пи FM»
                </button>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Группа ВК «БСТ»
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
                        <button className={styles.reverseOrangeButton}>
                            Заказать рекламу
                        </button>
                    </div>
                </div>

                <div className={styles.tablesContainer}>
                    <div className={styles.tablesTitle}>
                        Паблик «БСТ» - социальная сеть одной из самых популярных
                        телекомпаний города Братска. Публикуем актуальные
                        новости, популярные телевизионные сюжеты, а также
                        активно используем инструменты продвижения - клипы,
                        сторис и авторские подкасты.
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
                                        30 - 55 лет
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
                                        ref={statsRef}
                                    >
                                        43% мужчины, 57% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                30 150 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                Средний охват за 3 месяца – 77 000 пользователей
                                в месяц
                            </div>
                            <div className={styles.tableRow}>
                                Средний просмотр одного поста – 2 100 просмотров
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
                                Репост вашей публикации
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
                            <div className={styles.tableRow}>
                                Создание авторского подкаста
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
