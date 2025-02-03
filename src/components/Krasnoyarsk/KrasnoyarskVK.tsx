import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const KrasnoyarskVK = () => {
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
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/krasnoyarsk/vk-group')}
                >
                    Группа ВК
                </button>
                <button
                    className={styles.link}
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
                        Группа ВК «Прима»
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
                        Сообщество с главными новостями города и региона.
                        Авторские материалы, яркие городские события,
                        собственные сюжеты, а также большой упор на визуальную
                        составляющую - оформление публикаций в фирменном стиле
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
                                        44% мужчины 56% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                76 000 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                Cредний охват за 3 месяца - 365 000
                                пользователей в месяц
                            </div>
                            <div className={styles.tableRow}>
                                Средний просмотр одного поста - 4 500 просмотров
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
