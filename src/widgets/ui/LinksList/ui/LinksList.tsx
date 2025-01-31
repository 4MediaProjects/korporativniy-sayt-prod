import { useState } from 'react';
import styles from './LinksList.module.scss';

interface LinksListProps {
  title: string;
  href: string;
}

interface Props {
  props: LinksListProps[];
}

export const LinksList = ({ props }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      {props.map((item, index) => (
        <a
          className={`${styles.link} ${activeIndex === index ? styles.active : ''}`}
          href={item.href}
          key={index}
          onClick={() => setActiveIndex(index)}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};
