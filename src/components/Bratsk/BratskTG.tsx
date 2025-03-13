import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const BratskTG = () => {
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
                    src="/bratskBackground.svg"
                    alt="bratskBackground"
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
                    className={`${styles.link} ${styles.active}`}
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
                    className={styles.link}
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
                        Телеграм-канал «БСТ»
                    </div>
                    <img
                        src={`/bratskTV.png`}
                        alt="bratskTV"
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
                <div className={styles.tablesContainer} ref={statsRef}>
                    <div className={styles.tablesTitle}>
                        Всё самое важное из жизни Братска, района и области
                    </div>
                    <div className={styles.tableContainer}></div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>Статистика</div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                5 545 подписчиков
                            </div>
                            <div className={styles.tableRow}>
                                1,22% вовлеченность
                            </div>
                            <div className={styles.tableRow}>
                                1 315 – средний охват публикации
                            </div>
                            <div className={styles.tableRow}>
                                1 166 – средний рекламный охват
                            </div>
                            <div className={styles.tableRow}>
                                21% подписчиков читают посты в первые 24 часа
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
                                наш пост по ТЗ заказчика)
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
