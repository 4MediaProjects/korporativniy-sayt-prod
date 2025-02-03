import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AchinskTV = () => {
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
                    <div className={styles.title}>Ачинск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/achinsk/tv')}
                >
                    Телеканал АТВ
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Телеканал АТВ
                    </div>
                    <img
                        src={`jivemVNijnemInfoPortal.svg`}
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
                        Медиа-холдинг АТВ — это самопрограммируемый
                        телевизионный канал с круглосуточным вещанием, а также
                        радиостанция Хит-FM. Присутствует в социальных сетях и
                        имеет собственный сайт. Холдинг занимает лидирующие
                        позиции на медиа-рынке города Ачинска.
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
                                        Мужчины и женщины в возрасте 45-65 лет,
                                        со средним или высоким доходом, умные
                                        потребители, которые знают толк в
                                        товарах и услугах.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Технический охват телеканала
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                г. Абакан, Республика Хакасия, Юг Кр. Края
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват зрителей</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Ежедневный охват телеканала АТВ: более 11 000
                                телезрителей.
                            </div>
                            <div className={styles.tableRow}>
                                Среднесуточный охват телеканала: 12 000 чел.
                            </div>
                            <div className={styles.tableRow}>
                                Среднемесячный охват: 11 000 чел.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
