import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const IrkutskVK = () => {
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
                    className={`${styles.link} ${styles.active}`}
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
                        Группа ВК НТС
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
                        «НТС» (Новое Телевидение Сибири) - социальная сеть
                        обязательного общедоступного канала Иркутска и Иркутской
                        области. Освещаем актуальные события и новости
                        города/региона, как в текстовом формате, так и в формате
                        телевизионных сюжетов
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
                                    >
                                        47% мужчины 53% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                45 200 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                Средний охват за 3 месяца - 90 000 пользователей
                                в месяц
                            </div>
                            <div className={styles.tableRow}>
                                Средний просмотр одного поста - 1500 просмотров
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
