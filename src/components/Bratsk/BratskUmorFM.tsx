import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
export const BratskUmorFM = () => {
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
                <button className={styles.link}>Телеканал Домашний</button>
                <button className={styles.link}>Телеканал ТВЦ</button>
                <button className={styles.link}>
                    Радио «Европа плюс Братск»
                </button>
                <button className={styles.link}>
                    Радио «Шансон в Братске»
                </button>
                <button className={`${styles.link} ${styles.active}`}>
                    Радио «Юмор FM»
                </button>
                <button className={styles.link}>Радио «Пи FM»</button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Радио «Юмор FM»
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
                        Популярная музыка, классика и новинки юмора, фрагменты
                        из к/ф + прогноз погоды в Братске.
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Аудитория</div>
                        <div className={styles.audienceTable}>
                            <div className={styles.audienceTableContent}>
                                <div className={styles.audienceTableCell}>
                                    <div
                                        className={
                                            styles.audienceTableContentTitleText
                                        }
                                    >
                                        «Новости БСТ»
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
                                        25-35 лет
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
                        <div className={styles.tableTitle}>
                            Территория вещания
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                г. Братск и Братский район: население – 250 тыс.
                                человек
                            </div>
                            <div className={styles.tableRow}>
                                Среднесуточный охват по нашим данным – 20 000
                                слушателей
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
