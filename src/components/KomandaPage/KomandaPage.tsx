import styles from './KomandaPage.module.scss';

const staffList = [
    {
        name: 'Анна Лукьянова',
        role: 'Руководитель проекта “АТВ”',
        picture: 'guy',
    },
    {
        name: 'Дмитрий Акулов',
        role: 'Руководитель проекта “НТС”',
        picture: 'guy',
    },
    {
        name: 'Ирина Рашкован',
        role: 'Руководитель проекта “Юг Сибири”',
        picture: 'guy',
    },
    {
        name: 'Марина Делева',
        role: 'Руководитель проекта “Кубань Информ”',
        picture: 'guy',
    },
    {
        name: 'Александр Кольчурин',
        role: 'Руководитель проекта “Живём в Нижнем”',
        picture: 'guy',
    },
    {
        name: 'Дмитрий Ощепков',
        role: 'Руководитель проекта “БСТ”',
        picture: 'guy',
    },
    {
        name: 'Сергей Рубцов',
        role: 'Руководитель проекта “ПРИМА”',
        picture: 'guy',
    },
];
export const KomandaPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerModule}>
                <div className={styles.textModule}>
                    <div className={styles.headerTextWrapper}>
                        <div className={styles.header}>Команда ФорМедиа</div>
                        <div className={styles.secondaryText}>
                            Это коллектив талантливых и целеустремленных
                            профессионалов, которые создают инновационный
                            контент и двигают медиа-индустрию вперед.
                        </div>
                    </div>

                    <img src="/boss.svg" alt="boss" className={styles.img} />
                </div>
                <div className={styles.quoteModule}>
                    <img
                        src="/quotes.svg"
                        alt="quotes"
                        className={styles.quotes}
                    />
                    <div className={styles.quotesText}>
                        Региональные ТВ — про новости, про то, что происходит
                        здесь и сейчас. Региональное ТВ сосредотачиваются на той
                        части, которую хорошо знает, — местной проблематике,
                        которую и показывает в новостях. Новости — это очень
                        интересно и важно, мы регистрируем по-прежнему
                        высочайший интерес пользователя к региональным новостям.
                    </div>
                    <div className={styles.quotesText}>
                        Наш продукт сосредоточен на регионе, на том, что волнует
                        жителя конкретного города. Чаще всего это простые и
                        понятные вещи: график включения/выключения горячей воды,
                        ремонт дорог, паводок, социальные изменения. Мы держим
                        руку на пульсе интересов аудитории именно регионов,
                        работаем с этими вопросами и пытаемся на них отвечать.
                    </div>
                    <div className={styles.quotesText}>
                        Мы обратили внимание на городские порталы. Мы сделали на
                        них упор в этом году и в принципе строим теперь нашу
                        концепцию, что мы не моноплатформенная компания, которая
                        ориентируется на классические медиа, а все таки движемся
                        в сторону диджитального направления и делаем на него
                        ставку.
                    </div>
                    <div className={styles.quotesText}>
                        Путь развития — это отказ от моноплатформенности:
                        необходимо думать о своем медиабренде как о сильном и
                        качественном продукте, который можно развивать,
                        используя разные каналы коммуникации.
                    </div>
                    <div className={styles.author}>Андрей Шпорт</div>
                    <div className={styles.baldText}>
                        Генеральный директор ФорМедиа
                    </div>
                    <div className={styles.buttonList}>
                        <img
                            src="/boss.svg"
                            alt="boss"
                            className={styles.imgPhone}
                        />
                        <button className={styles.orangeButton}>
                            Интервью агентству ТАСС
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.staffModule}>
                {staffList.map((item, index) => (
                    <div className={styles.cardContainer} key={index}>
                        <img
                            src={`/${item.picture}.svg`}
                            alt="guy"
                            className={styles.staffPic}
                        />
                        <div className={styles.staffName}>{item.name}</div>
                        <div className={styles.staffRole}>{item.role}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
