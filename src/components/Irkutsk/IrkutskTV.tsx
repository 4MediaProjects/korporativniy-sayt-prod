import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const IrkutskTV = () => {
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
                    className={`${styles.link} ${styles.active}`}
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
                        Телеканал НТС
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
                        Телеканал создан в 2020 году. В 2021 году телеканал
                        получил «22» кнопку.
                    </div>
                    <div className={styles.tablesTitle}>
                        Имеет статус: Муниципальный обязательный общедоступный
                        телеканал
                    </div>
                    <div className={styles.tablesTitle}>
                        Направление вещания: Информационно-развлекательное.
                    </div>
                    <div className={styles.tablesTitle}>
                        Флагманский продукт: Программа "Новости по будням"
                        (новости региона) выходит ежедневно. В выходные —
                        повторы программы.
                    </div>
                    <div className={styles.tablesTitle}>
                        Другие программы: Ежемесячная программа "Живой Звук"
                        (совместно с радио Шансон). аз в месяц — программа
                        "Культурная программа" (по заказу Министерства
                        культуры).
                    </div>
                    <div className={styles.tablesTitle}>
                        Закупной контент составляет 75% ежемесячно:
                    </div>
                    <div className={styles.tablesTitle}>- Фильмы</div>
                    <div className={styles.tablesTitle}>- Сериалы</div>
                    <div className={styles.tablesTitle}>- Документалистика</div>
                    <div className={styles.tablesTitle}>- Шоу</div>
                    <div className={styles.tablesTitle}>- Концерты</div>
                    <div className={styles.tablesTitle}>- Мультфильмы</div>
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
                                        45+ лет
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
                                        60% мужчины 40% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Территория вещания
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Иркутск, Иркутская область
                            </div>
                            <div className={styles.tableRow}>
                                Среднесуточный охват по данным Медиахилс – 35574
                                зрителя (январь-май 2024)
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Технический охват телеканала
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Все кабельные операторы города + Ростелеком,
                                Дом.ру (область), в интернете – 24-часовая
                                трансляция на сайте nts-tv.ru
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват зрителей</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Доля по медиахилс (январь-июнь 2024 г.) - 0,86,
                                охват - 62 тыс. чел.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
