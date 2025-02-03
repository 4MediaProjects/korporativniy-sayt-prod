import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
export const IrkutskShanson = () => {
    const [isMobile, setIsMobile] = useState(false);

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
                        isMobile ? 'blankBackground.svg' : 'blankBackground.svg'
                    }
                    alt="blankBackground"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Иркутск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button className={styles.link}>Телеграм-канал</button>
                <button className={styles.link}>Группа ВК</button>
                <button className={styles.link}>Телеканал НТС</button>
                <button className={styles.link}>Авторадио Иркутск</button>
                <button className={`${styles.link} ${styles.active}`}>
                    Радио Шансон Иркутск
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Радио Шансон Иркутск
                    </div>
                    <img
                        src={`blankImage.svg`}
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
                        Крупнейшая радиостанция России, с 24-летним стажем
                        работы, занимающая лидирующие позиции в рейтинге станций
                        по всей России.
                    </div>
                    <div className={styles.tablesTitle}>
                        Программы собственного производства: Иркутские новости,
                        Прогноз погоды, Шансономания, Живой звук, Хит Шансона.
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
                                        35 - 59 лет
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
                                        53% мужчины 47 % женщины
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
                                г. Иркутск, Иркутский район, гг. Иркутск,
                                Байкальск, Усолье Сибирское, Черемхово, Залари,
                                Саянск, Куйтун, Тулун, Покосное, Нижнеудинск,
                                Алзамай, Тайшет.  (население – 1 040 тыс.
                                человек).
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
                                Дом.ру (область), в интернете –  24-часовая
                                трансляция на сайте nts-tv.ru
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Охват слушателей
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Среднесуточный охват в Иркутске по данным
                                Mediascope (март-апрель 2023) - 35 600
                                слушателей.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
