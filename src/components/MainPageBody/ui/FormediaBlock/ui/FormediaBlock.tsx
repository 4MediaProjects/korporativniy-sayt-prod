import styles from './FormediaBlock.module.scss';
import ButtonList from '../../../../../widgets/ui/ButtonList';
export const FormediaBlock = ({
  mainText,
  secondaryText,
  thirdlyText,
  fourthlyText,
  orangeButton,
  reverseOrangeButton,
}: {
  mainText?: string;
  secondaryText?: string;
  thirdlyText?: string;
  fourthlyText?: string;
  orangeButton?: string;
  reverseOrangeButton?: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTextBlock}>
        {mainText && <div className={styles.mainText}>{mainText}</div>}
        {secondaryText && (
          <div className={styles.secondaryText}>{secondaryText}</div>
        )}
      </div>
      <div className={styles.secondaryTextBlock}>
        {thirdlyText && <div className={styles.thirdlyText}>{thirdlyText}</div>}
        {fourthlyText && (
          <div className={styles.thirdlyText}>{fourthlyText}</div>
        )}
        <ButtonList
          orangeButton={orangeButton}
          reverseOrangeButton={reverseOrangeButton}
        />
      </div>
    </div>
  );
};
