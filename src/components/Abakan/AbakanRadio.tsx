import styles from '../../shared/cityPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AbakanRadio = () => {
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
                    className={styles.link}
                    onClick={() => navigate('/abakan/notabene')}
                >
                    Программа NotaBene
                </button>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/abakan/radio')}
                >
                    Радио «Сибирь»
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Радио «Сибирь»
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
                        <button className={styles.reverseOrangeButton}>
                            Заказать рекламу
                        </button>
                    </div>
                </div>
                <div className={styles.tablesContainer}>
                    <div className={styles.tablesTitle}>
                        Местная самопрограмируемая радиостанция
                    </div>
                    <div className={styles.tablesTitle}>
                        - свежие и актуальные новости юга Сибири; 
                    </div>
                    <div className={styles.tablesTitle}>
                        - собственное утреннее шоу «Жесть Утра» с интерактивом и
                        призами;
                    </div>
                    <div className={styles.tablesTitle} ref={statsRef}>
                        - информация из мира шоубизнеса;
                    </div>
                    <div className={styles.tablesTitle}>
                        - масштабные внеэфирные проекты.
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
                                        26 - 32 лет
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
                                        65% мужчины 35% женщины
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Технический охват
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Формат станции: Contemporary Hit Radio
                                (современное хитовое радио)  Распространение:
                                Абакан + 100 км, Саяногорск + 78 км 103,7 FM –
                                волна Абакан 106,7 FM – волна Саяногорск 101,5
                                FM – волна Шира Три мощных передатчика
                                обеспечивают максимальный в Хакасии технический
                                охват. На этой территории проживает более 486
                                000 человек. Онлайн-вещание на сайте медиагруппы
                                «Юг Сибири» ctv7.ru
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Охват зрителей</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Не менее 40-50 тыс в сутки
                            </div>
                            <div className={styles.tableRow}>
                                Доля по медиахилс - доля канала 0,5-0,6%, доля
                                Новостей 5,0-5,5 %
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
