import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <img
                src="/logo.svg"
                alt="Logo"
                className={styles.logo}
                onClick={() => navigate('/')}
            />
            <div className={styles.linkContainer}>
                <div className={styles.links}>
                    <div>
                        <a href="">Проекты холдинга</a>
                    </div>
                    <div>
                        <a href="">О холдинге</a>
                    </div>
                    <div>
                        <a href="">Продакшен</a>
                    </div>
                    <div>
                        <a href="">Вакансии</a>
                    </div>
                    <div>
                        <a href="">Контакты</a>
                    </div>
                </div>
            </div>
        </header>
    );
};
