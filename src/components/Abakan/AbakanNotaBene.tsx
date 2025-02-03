import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';

export const AbakanNotaBene = () => {
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
                    <div className={styles.title}>Абакан</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button className={styles.link}>Информационный портал</button>
                <button className={styles.link}>Телеграм-канал</button>
                <button className={styles.link}>Группа ВК</button>
                <button className={styles.link}>Телеканал ТВ7</button>
                <button className={`${styles.link} ${styles.active}`}>
                    Программа NotaBene
                </button>
                <button className={styles.link}>Радио «Сибирь»</button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Программа NotaBene
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
                        Программа NotaBene – самый рейтинговый и влиятельный
                        продукт телеканала ТВ7
                    </div>
                    <div className={styles.tablesTitle}>
                        - Создание собственных информационно-аналитических
                        программ, авторских сценариев и телепередач; 
                    </div>
                    <div className={styles.tablesTitle}>
                        - Прямые эфиры новостей с приглашенными гостями в
                        формате интервью;
                    </div>
                    <div className={styles.tablesTitle}>
                        - Трансляция прямого эфира сразу на нескольких
                        онлайн-площадках;
                    </div>
                    <div className={styles.tablesTitle}>
                        - Пятикратный победитель Всероссийского телевизионного
                        конкурса «ТЭФИ-Регион»
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват зрителей</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Среднесуточный показатель просмотров NotaBene: ~
                                30 148
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
