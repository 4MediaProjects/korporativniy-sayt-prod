import styles from '../../shared/cityPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const BratskTVC = () => {
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
                    className={`${styles.link} ${styles.active}`}
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
                        Телеканал ТВЦ
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
                        Муниципальный обязательный общедоступный телеканал с
                        круглосуточным самопрограммированием:
                    </div>
                    <div className={styles.tablesTitle}>
                        - самые рейтинговые местные ТВ-продукты: информационная
                        программа «Новости БСТ», розыгрыш «Лёгкие деньги»,
                        информационно-развлекательные программы собственного
                        производства
                    </div>
                    <div className={styles.tablesTitle}>- Кино</div>
                    <div className={styles.tablesTitle}>- Сериалы</div>
                    <div className={styles.tablesTitle}>
                        Основной выпуск: «Новости БСТ» (БСТ24) в 19:00 – 13566
                        зрителей, Всего за сутки 8 выпусков - 29024 зрителя
                    </div>
                    <div className={styles.tablesTitle}>
                        Программа входит в ТОП-20 самых цитируемых СМИ Иркутской
                        области (Медиалогия)
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
                                        35 – 65 лет
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
                                        60% мужчины 40 % женщины
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
                                Среднесуточный охват по данным Медиахилс – 35574
                                зрителя (январь-май 2024)
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableTitle}>
                            Технический охват телеканала
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                Все кабельные операторы города + сервис
                                Ростелекома Wink, приложение для Smart TV на
                                операционных системах webOs и Android, ресурсы в
                                интернете –  24-часовая трансляция на сайте и в
                                телеграм-канале Братской студии телевидения,
                                онлайн-вещание в Rutube и LimeHD.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
