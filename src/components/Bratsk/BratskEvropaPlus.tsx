import styles from '../../shared/cityPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const BratskEvropaPlus = () => {
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
        if (statsRef.current) {
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
                            ? '/bratskBackground.svg'
                            : '/bratskBackground.svg'
                    }
                    alt="jivemVNijnem"
                    className={styles.headerImage}
                />
                <div className={styles.headerOverlay}>
                    <div className={styles.title}>Братск</div>
                </div>
            </div>

            <div className={styles.linksListContainer}>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/info-portal')}
                >
                    Информационный портал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/tg-channel')}
                >
                    Телеграм-канал
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/vk-group')}
                >
                    Группа ВК
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/bratsk-24')}
                >
                    Телеканал «БСТ 24»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/sts')}
                >
                    Телеканал СТС
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/domashniy')}
                >
                    Телеканал Домашний
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/tvc')}
                >
                    Телеканал ТВЦ
                </button>
                <button
                    className={`${styles.link} ${styles.active}`}
                    onClick={() => navigate('/bratsk/evropa-plus')}
                >
                    Радио «Европа плюс Братск»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/shanson')}
                >
                    Радио «Шансон в Братске»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/umorfm')}
                >
                    Радио «Юмор FM»
                </button>
                <button
                    className={styles.link}
                    onClick={() => navigate('/bratsk/pifm')}
                >
                    Радио «Пи FM»
                </button>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.cardImageButtonsContainer}>
                    <div className={styles.cardImageButtonsTitle}>
                        Радио «Европа плюс Братск»
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
                        Только мировые хиты, развлекательные шоу + новости.
                    </div>
                    <div className={styles.tableContainer} ref={statsRef}>
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
                                        14-44 лет
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
                                        42% мужчины 58% женщины
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
                                Среднесуточный охват по нашим данным – 40 000
                                слушателей
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
