import styles from "./HeaderWithImage.module.scss"
interface IHeaderWithImageProps  {
  title: string
  imageName: string
}
interface Props {
  props: IHeaderWithImageProps
}
export const HeaderWithImage = ({props}: Props) => {
  return (
    <div className={styles.container}>
      <img src={`/${props.imageName}.svg`} alt={props.title} className={styles.image} />
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}