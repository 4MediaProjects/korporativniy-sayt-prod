import styles from './KomandaPage.module.scss';
export const KomandaPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerModule}>
                <div className={styles.textModule}>
                    <div className={styles.header}>Команда ФорМедиа</div>
                    <div className={styles.secondaryText}>
                        Это коллектив талантливых и целеустремленных
                        профессионалов, которые создают инновационный контент и
                        двигают медиа-индустрию вперед.
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
                        <button className={styles.orangeButton}>
                            Интервью агентству ТАСС
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.staffModule}>
                <div className={styles.cardContainer}>
                    <img src="/guy.svg" alt="guy" className={styles.staffPic} />
                    <div className={styles.staffName}>Анна Лукьянова</div>
                    <div className={styles.staffRole}>
                        Руководитель проекта “АТВ”{' '}
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <img src="/guy.svg" alt="guy" className={styles.staffPic} />
                    <div className={styles.staffName}>Дмитрий Акулов</div>
                    <div className={styles.staffRole}>
                        Руководитель проекта “НТС”
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <img src="/guy.svg" alt="guy" className={styles.staffPic} />
                    <div className={styles.staffName}>Ирина Рашкован</div>
                    <div className={styles.staffRole}>
                        Руководитель проекта “Юг Сибири”
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <img src="/guy.svg" alt="guy" className={styles.staffPic} />
                    <div className={styles.staffName}>Марина Делева</div>
                    <div className={styles.staffRole}>
                        Руководитель проекта “Кубань Информ”
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <img src="/guy.svg" alt="guy" className={styles.staffPic} />
                    <div className={styles.staffName}>Александр Кольчурин</div>
                    <div className={styles.staffRole}>
                        Руководитель проекта “Живём в Нижнем”
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <img src="/guy.svg" alt="guy" className={styles.staffPic} />
                    <div className={styles.staffName}>Дмитрий Ощепков</div>
                    <div className={styles.staffRole}>
                        Руководитель проекта “БСТ”
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <img src="/guy.svg" alt="guy" className={styles.staffPic} />
                    <div className={styles.staffName}>Сергей Рубцов</div>
                    <div className={styles.staffRole}>
                        Руководитель проекта “ПРИМА”
                    </div>
                </div>
            </div>
        </div>
    );
};
