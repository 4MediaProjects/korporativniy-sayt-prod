import styles from './CardImageButtons.module.scss';
import ButtonList from '../../ButtonList';

interface ICardImageButtons {
    title: string;
    imageName: string;
    orangeButton?: string;
    reverseOrangeButton?: string;
}

interface Props {
    props: ICardImageButtons;
}

export const CardImageButtons = ({ props }: Props) => {
    return (
        <div className={styles.cardImageButtonsContainer}>
            <div className={styles.title}>{props.title}</div>
            <img
                src={`/${props.imageName}.svg`}
                alt={props.imageName}
                className={styles.image}
            />
            <ButtonList
                orangeButton={props.orangeButton}
                reverseOrangeButton={props.reverseOrangeButton}
            />
        </div>
    );
};
