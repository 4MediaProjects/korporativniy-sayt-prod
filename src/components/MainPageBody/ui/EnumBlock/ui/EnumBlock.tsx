import styles from './EnumBlock.module.scss';
export const EnumBlock = () => {
    return(
        <div className={styles.container}>
            <div className={styles.enumBlock}>
                <div className={styles.headerText}>25 лет</div>
                <div className={styles.mainText}>Холдинг успешно работает на медиарынке</div>
            </div>
            <div className={styles.enumBlock}>
                <div className={styles.headerText}>5 700 000</div>
                <div className={styles.mainText}>Посетителей
                    на <span>сайтах </span> в месяц</div>
            </div>
            <div className={styles.enumBlock}>
                <div className={styles.headerText}>600 000</div>
                <div className={styles.mainText}><span>Подписчиков </span> в социальных сетях</div>
            </div>
            <div className={styles.enumBlock}>
                <div className={styles.headerText}>3 500 000</div>
                <div className={styles.mainText}>Аудитория <span>ТВ </span>
                    в месяц</div>
            </div>
            <div className={styles.enumBlock}>
                <div className={styles.headerText}>1 250 000</div>
                <div className={styles.mainText}>Аудитория <span>радио </span>
                    в месяц</div>
            </div>
        </div>
    )
}