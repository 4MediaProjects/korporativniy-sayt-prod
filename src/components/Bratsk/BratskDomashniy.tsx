import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
export const BratskDomashniy = () => {
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
                        isMobile
                            ? 'bratskBackground.svg'
                            : 'bratskBackground.svg'
                    }
                    alt="jivemVNijnem"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Братск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button className={styles.link}>Информационный портал</button>
                <button className={styles.link}>Телеграм-канал</button>
                <button className={styles.link}>Группа ВК</button>
                <button className={styles.link}>Телеканал «БСТ 24»</button>
                <button className={styles.link}>Телеканал СТС</button>
                <button className={`${styles.link} ${styles.active}`}>
                    Телеканал Домашний
                </button>
                <button className={styles.link}>Телеканал ТВЦ</button>
                <button className={styles.link}>
                    Радио «Европа плюс Братск»
                </button>
                <button className={styles.link}>
                    Радио «Шансон в Братске»
                </button>
                <button className={styles.link}>Радио «Юмор FM»</button>
                <button className={styles.link}>Радио «Пи FM»</button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Телеканал Домашний
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
                        Кино, телесериалы, телешоу.
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
                                        25 – 59 лет
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
                                        16% мужчины 84 % женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.audienceTable}>
                            <div className={styles.audienceTableContent}>
                                <div className={styles.audienceTableCell}>
                                    <div
                                        className={
                                            styles.audienceTableContentTitleText
                                        }
                                    >
                                        Информационно-развлекательные проекты
                                    </div>
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
                                        25 – 55 лет
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
                                        30% мужчины 70 % женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.audienceTable}>
                            <div className={styles.audienceTableContent}>
                                <div className={styles.audienceTableCell}>
                                    <div
                                        className={
                                            styles.audienceTableContentTitleText
                                        }
                                    >
                                        «Лёгкие деньги»
                                    </div>
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
                                        20 – 60 лет
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
                                        50% мужчины 50% женщины
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
                                г. Братск и Братский район: население – 250 тыс.
                                человек
                            </div>
                            <div className={styles.tableRow}>
                                Среднесуточный охват по данным Медиахилс – 38
                                750 человек (январь-май 2024)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
