import styles from './CityPage.module.scss';
import HeaderWithImage from '../../../../../widgets/ui/HeaderWithImage';
import LinksList from '../../../../../widgets/ui/LinksList';
import ContentBlock from '../../ContentBlock';
const HeaderWithImageProps = { title: 'Братск', imageName: 'bratskBackground' };
const LinksListProps = [
  { title: 'string', href: '#' },
  { title: 'string', href: '#' },
  { title: 'string', href: '#' },
  { title: 'string', href: '#' },
  { title: 'string', href: '#' },
];

export const CityPage = () => {
  return (
    <div className={styles.conysiner}>
      <HeaderWithImage props={HeaderWithImageProps} />
      <LinksList props={LinksListProps} />
      <ContentBlock />
    </div>
  );
};
