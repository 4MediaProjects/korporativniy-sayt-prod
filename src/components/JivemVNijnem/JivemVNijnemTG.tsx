import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
export const JivemVNijnemTG = () => {
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
                            ? 'jivemVNijnemBackGroundMobile.svg'
                            : 'jivemVNijnemBackGround.svg'
                    }
                    alt="jivemVNijnem"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <img
                        src="jivemVnijnem.svg"
                        alt="jivemVNijnem"
                        className={styles.imageTitle}
                    />
                    <div className={styles.title}>Нижний Новгород</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button className={styles.link}>Информационный портал</button>
                <button className={`${styles.link} ${styles.active}`}>
                    Телеграм-канал
                </button>
                <button className={styles.link}>Группа ВК</button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Телеграм-канал «Живем в Нижнем»
                    </div>
                    <img
                        src={`jivemVNijnemTG.svg`}
                        alt="jivemVNijnemTG"
                        className={styles.image}
                    />
                    <div className={styles.buttonList}>
                        <button className={styles.orangeButton}>
                            К каналу
                        </button>
                        <button className={styles.reverseOrangeButton}>
                            Заказать рекламу
                        </button>
                    </div>
                </div>
                <div className={styles.tablesContainer}>
                    <div className={styles.tablesTitle}>
                        Главные новости Нижнего Новгорода
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                9 584 подписчика
                            </div>
                            <div className={styles.tableRow}>
                                1,49% вовлеченность
                            </div>
                            <div className={styles.tableRow}>
                                2 549 – средний охват публикации
                            </div>
                            <div className={styles.tableRow}>
                                2 086 – средний рекламный охват публикации
                            </div>
                            <div className={styles.tableRow}>
                                22% подписчиков читают посты в первые 24 часа
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
                                наш пост по ТЗ заказчика
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
