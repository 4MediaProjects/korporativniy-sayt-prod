import styles from './MainPageBody.module.scss';
import FormediaBlock from '../../FormediaBlock';
import EnumBlock from '../../EnumBlock';
import ProjectsList from '../../ProjectsList';
const projects = [
  {
    imageName: 'jivemVnijnem',
    header: 'Живем в Нижнем',
    secondaryText: 'Нижний Новгород',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'Социальные сети' },
      { href: '#', text: 'Радио' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'cuban',
    header: 'КубаньИнформ',
    secondaryText: 'Краснодар',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'Социальные сети' },
      { href: '#', text: 'Радио' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'gorodPrima',
    header: 'Город Прима',
    secondaryText: 'Красноярск',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'ТВ' },
      { href: '#', text: 'Радио' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'achinsk',
    header: 'Ачинское телевидение',
    secondaryText: 'Ачинск',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'ТВ' },
      { href: '#', text: 'Радио' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'bratsk',
    header: 'Братская студия телевидения',
    secondaryText: 'Братск',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'ТВ' },
      { href: '#', text: 'Радио' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'irkutsk',
    header: 'Новое телевидение Сибири',
    secondaryText: 'Иркутск',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'ТВ' },
      { href: '#', text: 'Радио' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'perviyBaikalskiy',
    header: 'Первый байкальский',
    secondaryText: 'Иркутск',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'yugSibiri',
    header: 'Юг Сибири',
    secondaryText: 'Абакан, Саяногорск (Республика Хакасия)',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'ТВ' },
      { href: '#', text: 'Радио' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
  {
    imageName: 'sibirRabotaet',
    header: 'Спецпроект',
    secondaryText: 'Производство медиаконтента',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'ТВ' },
      { href: '#', text: 'Радио' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
  {
    header: 'Спецпроект',
    secondaryText: 'Прима продакшен',
    linksList: [
      { href: '#', text: 'Интернет-портал' },
      { href: '#', text: 'ТВ' },
      { href: '#', text: 'Радио' },
      { href: '#', text: 'Социальные сети' },
    ],
    buttonText: 'подробнее',
  },
];
export const MainPageBody = () => {
  return (
    <div className={styles.container}>
      <FormediaBlock
        mainText="ФорМедиа"
        secondaryText="Региональный медиахолдинг"
        thirdlyText="крупнейшая медийная компания, объединяющая четыре основных медиа-ресурса"
        orangeButton="Медиакит"
        reverseOrangeButton="Реклама"
      />
      <EnumBlock />
      <FormediaBlock
        secondaryText="Объединяем людей от Черного моря
до Байкала"
        thirdlyText="Медиахолдинг “ФорМедиа” — крупнейшая медийная компания, объединяющая четыре основных медиа-ресурса: телевидение, новостные интернет-порталы, радио и социальные сети."
        fourthlyText="Наша миссия — предоставлять аудитории качественный и актуальный контент, отвечающий их интересам и потребностям."
        orangeButton="О холдинге"
      />
      <ProjectsList projects={projects} />
    </div>
  );
};
