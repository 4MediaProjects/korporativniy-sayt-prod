import styles from './MainPageBody.module.scss';
import ProjectsList from '../../ProjectsList';
import { useNavigate } from 'react-router-dom';
const projects = [
    {
        imageName: 'jivemVnijnem',
        header: 'Живем в Нижнем',
        secondaryText: 'Нижний Новгород',
        linksList: [
            { href: '/nijniy-novgorod/info-portal', text: 'Интернет-портал' },
            { href: '/nijniy-novgorod/tg-channel', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
        buttonLink: '/nijniy-novgorod/info-portal',
    },
    {
        imageName: 'cuban',
        header: 'КубаньИнформ',
        secondaryText: 'Краснодар',
        linksList: [{ href: '/kuban/info-portal', text: 'Интернет-портал' }],
        buttonText: 'подробнее',
        buttonLink: '/kuban/info-portal',
    },
    {
        imageName: 'gorodPrima',
        header: 'Город Прима',
        secondaryText: 'Красноярск',
        linksList: [
            { href: '/krasnoyarsk/info-portal', text: 'Интернет-портал' },
            { href: '/krasnoyarsk/tv', text: 'ТВ' },
            { href: '/krasnoyarsk/radio', text: 'Радио' },
            { href: '/krasnoyarsk/tg-channel', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
        buttonLink: 'krasnoyarsk/info-portal',
    },
    {
        imageName: 'achinsk',
        header: 'Ачинское телевидение',
        secondaryText: 'Ачинск',
        linksList: [{ href: '/achinsk/tv', text: 'ТВ' }],
        buttonText: 'подробнее',
        buttonLink: '/achinsk/tv',
    },
    {
        imageName: 'bratsk',
        header: 'Братская студия телевидения',
        secondaryText: 'Братск',
        linksList: [
            { href: '/bratsk/info-portal', text: 'Интернет-портал' },
            { href: '/bratsk/bratsk-24', text: 'ТВ' },
            { href: '/bratsk/shanson', text: 'Радио' },
            { href: '/bratsk/tg-channel', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
        buttonLink: '/bratsk/info-portal',
    },
    {
        imageName: 'irkutsk',
        header: 'Новое телевидение Сибири',
        secondaryText: 'Иркутск',
        linksList: [
            { href: '/irkutsk/info-portal', text: 'Интернет-портал' },
            { href: '/irkutsk/tv', text: 'ТВ' },
            { href: '/irkutsk/shanson', text: 'Радио' },
            { href: '/irkutsk/tg-channel', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
        buttonLink: '/irkutsk/tv',
    },
    {
        imageName: 'perviyBaikalskiy',
        header: 'Первый байкальский',
        secondaryText: 'Иркутск',
        linksList: [
            { href: '/perviyBaikalskiy/info-portal', text: 'Интернет-портал' },
            { href: '/perviyBaikalskiy/avtoradio', text: 'Авторадио' },
            { href: '/perviyBaikalskiy/shanson', text: 'Шансон' },
        ],
        buttonText: 'подробнее',
        buttonLink: '/perviyBaikalskiy/info-portal',
    },
    {
        imageName: 'yugSibiri',
        header: 'Юг Сибири',
        secondaryText: 'Абакан, Саяногорск (Республика Хакасия)',
        linksList: [
            { href: '/abakan/info-portal', text: 'Интернет-портал' },
            { href: '/abakan/tv', text: 'ТВ' },
            { href: '/abakan/radio', text: 'Радио' },
            { href: '/abakan/vk-group', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
        buttonLink: '/abakan/info-portal',
    },
    {
        imageName: 'sibirRabotaet',
        header: 'Спецпроект',
        secondaryText: 'Производство медиаконтента',
        linksList: [
            { href: '/blank', text: 'Интернет-портал' },
            { href: '/blank', text: 'ТВ' },
            { href: '/blank', text: 'Радио' },
            { href: '/blank', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
        buttonLink: '/blank',
    },
    {
        header: 'Спецпроект',
        secondaryText: 'Прима продакшен',
        linksList: [
            { href: '/blank', text: 'Интернет-портал' },
            { href: '/blank', text: 'ТВ' },
            { href: '/blank', text: 'Радио' },
            { href: '/blank', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
        buttonLink: '/blank',
    },
];
export const MainPageBody = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.formediaBlockContainer}>
                    <div className={styles.mainTextBlock}>
                        <div className={styles.mainText}>ФорМедиа</div>

                        <div className={styles.secondaryText}>
                            Региональный медиахолдинг
                        </div>
                        <div className={styles.secondaryTextBlock}>
                            <div className={styles.thirdlyText}>
                                крупнейшая медийная компания, объединяющая
                                четыре основных медиа-ресурса
                            </div>

                            <div className={styles.buttonList}>
                                <button
                                    className={styles.orangeButton}
                                    onClick={() => navigate('/blank')}
                                >
                                    Медиакит
                                </button>

                                <button
                                    className={styles.reverseOrangeButton}
                                    onClick={() => navigate('/blank')}
                                >
                                    Реклама
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.textNumberEnum}>
                        <div className={styles.textNumberContainer}>
                            <img
                                src="/twenty.svg"
                                alt="twenty"
                                className={styles.numberImg}
                            />
                            <div className={styles.textNumber}>
                                Телекомпаний
                            </div>
                        </div>
                        <div className={styles.textNumberContainer}>
                            <img
                                src="/thirteen.svg"
                                alt="thirteen"
                                className={styles.numberImg}
                            />
                            <div className={styles.textNumber}>
                                Радиостанций
                            </div>
                        </div>
                        <div className={styles.textNumberContainer}>
                            <img
                                src="/ten.svg"
                                alt="ten"
                                className={styles.numberImg}
                            />
                            <div className={styles.textNumber}>
                                Интернет-порталов
                            </div>
                        </div>
                        <div className={styles.textNumberContainer}>
                            <img
                                src="/twenty.svg"
                                alt="twenty"
                                className={styles.numberImg}
                            />
                            <div className={styles.textNumber}>
                                Групп в соц. сетях
                            </div>
                        </div>
                    </div>
                    <img
                        src="/background-image.svg"
                        alt="background"
                        className={styles.circleImg}
                    />
                </div>
            </div>

            <div className={styles.enumBlockContainer}>
                <div className={styles.enumBlock}>
                    <div className={styles.enumBlockHeaderText}>25 лет</div>
                    <div className={styles.enumBlockMainText}>
                        Холдинг успешно работает на медиарынке
                    </div>
                </div>
                <div className={styles.enumBlock}>
                    <div className={styles.enumBlockHeaderText}>5 700 000</div>
                    <div className={styles.enumBlockMainText}>
                        Посетителей на <span>сайтах </span> в месяц
                    </div>
                </div>
                <div className={styles.enumBlock}>
                    <div className={styles.enumBlockHeaderText}>600 000</div>
                    <div className={styles.enumBlockMainText}>
                        <span>Подписчиков </span> в социальных сетях
                    </div>
                </div>
                <div className={styles.enumBlock}>
                    <div className={styles.enumBlockHeaderText}>3 500 000</div>
                    <div className={styles.enumBlockMainText}>
                        Аудитория <span>ТВ </span>в месяц
                    </div>
                </div>
                <div className={styles.enumBlock}>
                    <div className={styles.enumBlockHeaderText}>1 250 000</div>
                    <div className={styles.enumBlockMainText}>
                        Аудитория <span>радио </span>в месяц
                    </div>
                </div>
            </div>
            <div className={styles.imageOverlay}>
                <div className={styles.formediaBlockContainer}>
                    <div className={styles.mainTextBlock}>
                        <div className={styles.secondaryText}>
                            Объединяем людей от Черного моря до Байкала
                        </div>
                    </div>
                    <div className={styles.secondaryTextBlock}>
                        <div className={styles.thirdlyText}>
                            Медиахолдинг “ФорМедиа” — крупнейшая медийная
                            компания, объединяющая четыре основных
                            медиа-ресурса: телевидение, новостные
                            интернет-порталы, радио и социальные сети.
                        </div>

                        <div className={styles.thirdlyText}>
                            Наша миссия — предоставлять аудитории качественный и
                            актуальный контент, отвечающий их интересам и
                            потребностям.
                        </div>
                        <div className={styles.buttonList}>
                            <button
                                className={styles.orangeButton}
                                onClick={() => navigate('/blank')}
                            >
                                О холдинге
                            </button>
                        </div>
                    </div>
                </div>
                <img src="/karta.svg" alt="karta" className={styles.img} />
            </div>

            <ProjectsList projects={projects} />
        </div>
    );
};
