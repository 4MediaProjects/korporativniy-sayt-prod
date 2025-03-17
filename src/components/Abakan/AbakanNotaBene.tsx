import styles from '../../shared/cityPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AbakanNotaBene = () => {
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
        if (statsRef.current && isMobile) {
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
                    src={
                        isMobile
                            ? '/yugSibiriBackground.jpg'
                            : '/yugSibiriBackground.jpg'
                    }
                    alt="yugSibiriBackground"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Абакан</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/tg-channel')}
                >
                    Телеграм-канал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/vk-group')}
                >
                    Группа ВК
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/tv')}
                >
                    Телеканал ТВ7
                </button>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/abakan/notabene')}
                >
                    Программа NotaBene
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/abakan/radio')}
                >
                    Радио «Сибирь»
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Программа NotaBene
                    </div>
                    <img
                        src={`/yugSibiriMainPicture.jpg`}
                        alt="yugSibiriMainPicture"
                        className={styles.image}
                    />
                    <div className={styles.buttonList}>
                        <button className={styles.orangeButton}>
                            К порталу
                        </button>
                        <button
                            className={styles.reverseOrangeButton}
                            ref={statsRef}
                        >
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
