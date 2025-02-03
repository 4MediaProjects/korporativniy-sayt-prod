import styles from './MainPageBody.module.scss';
import ProjectsList from '../../ProjectsList';
const projects = [
    {
        imageName: 'jivemVnijnem',
        header: 'Живем в Нижнем',
        secondaryText: 'Нижний Новгород',
        linksList: [
            { href: '/nijniy-novgorod/info-portal', text: 'Интернет-портал' },
            { href: '/nijniy-novgorod/tg-channel', text: 'Социальные сети' },
            { href: '#', text: 'Радио' },
        ],
        buttonText: 'подробнее',
    },
    {
        imageName: 'cuban',
        header: 'КубаньИнформ',
        secondaryText: 'Краснодар',
        linksList: [
            { href: '#', text: 'Интернет-портал' },
            { href: '#', text: 'Социальные сети' },
            { href: '#', text: 'Радио' },
        ],
        buttonText: 'подробнее',
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
    },
    {
        imageName: 'achinsk',
        header: 'Ачинское телевидение',
        secondaryText: 'Ачинск',
        linksList: [
            { href: '#', text: 'Интернет-портал' },
            { href: '/achinsk/tv', text: 'ТВ' },
            { href: '#', text: 'Радио' },
            { href: '#', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
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
    },
    {
        imageName: 'irkutsk',
        header: 'Новое телевидение Сибири',
        secondaryText: 'Иркутск',
        linksList: [
            { href: '/irkutsk/vk-group', text: 'Интернет-портал' },
            { href: '/irkutsk/tv', text: 'ТВ' },
            { href: '/irkutsk/shanson', text: 'Радио' },
            { href: '/irkutsk/tg-channel', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
    },
    {
        imageName: 'perviyBaikalskiy',
        header: 'Первый байкальский',
        secondaryText: 'Иркутск',
        linksList: [
            { href: '#', text: 'Интернет-портал' },
            { href: '#', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
    },
    {
        imageName: 'yugSibiri',
        header: 'Юг Сибири',
        secondaryText: 'Абакан, Саяногорск (Республика Хакасия)',
        linksList: [
            { href: '#', text: 'Интернет-портал' },
            { href: '#', text: 'ТВ' },
            { href: '#', text: 'Радио' },
            { href: '#', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
    },
    {
        imageName: 'sibirRabotaet',
        header: 'Спецпроект',
        secondaryText: 'Производство медиаконтента',
        linksList: [
            { href: '#', text: 'Интернет-портал' },
            { href: '#', text: 'ТВ' },
            { href: '#', text: 'Радио' },
            { href: '#', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
    },
    {
        header: 'Спецпроект',
        secondaryText: 'Прима продакшен',
        linksList: [
            { href: '#', text: 'Интернет-портал' },
            { href: '#', text: 'ТВ' },
            { href: '#', text: 'Радио' },
            { href: '#', text: 'Социальные сети' },
        ],
        buttonText: 'подробнее',
    },
];
export const MainPageBody = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formediaBlockContainer}>
                <div className={styles.mainTextBlock}>
                    <div className={styles.mainText}>ФорМедиа</div>

                    <div className={styles.secondaryText}>
                        Региональный медиахолдинг
                    </div>
                </div>
                <div className={styles.secondaryTextBlock}>
                    <div className={styles.thirdlyText}>
                        крупнейшая медийная компания, объединяющая четыре
                        основных медиа-ресурса
                    </div>

                    <div className={styles.buttonList}>
                        <button className={styles.orangeButton}>
                            Медиакит
                        </button>

                        <button className={styles.reverseOrangeButton}>
                            Реклама
                        </button>
                    </div>
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
                            <button className={styles.orangeButton}>
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
