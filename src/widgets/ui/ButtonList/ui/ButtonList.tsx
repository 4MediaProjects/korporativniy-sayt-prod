import styles from './ButtonList.module.scss';

export const ButtonList = ({
  orangeButton,
  reverseOrangeButton,
}: {
  orangeButton?: string;
  reverseOrangeButton?: string;
}) => {
  return (
    <div className={styles.buttonList}>
      {orangeButton && (
        <button className={styles.orangeButton}>{orangeButton}</button>
      )}
      {reverseOrangeButton && (
        <button className={styles.reverseOrangeButton}>
          {reverseOrangeButton}
        </button>
      )}
    </div>
  );
};
