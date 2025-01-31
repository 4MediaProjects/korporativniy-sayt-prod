import styles from './ContentBlock.module.scss';
import CardImageButtons from '../../../../../widgets/ui/CardImageButtons';

const CardImageButtonsProps = {
  title: 'string',
  imageName: 'blankImage',
  orangeButton: 'string',
  reverseOrangeButton: 'string',
};

export const ContentBlock = () => {
  return (
    <div className={styles.container}>
      <CardImageButtons props={CardImageButtonsProps} />
    </div>
  );
};
