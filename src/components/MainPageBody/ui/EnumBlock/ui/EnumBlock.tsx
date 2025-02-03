import styles from './EnumBlock.module.scss';
export const EnumBlock = () => {
    return (
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
    );
};
