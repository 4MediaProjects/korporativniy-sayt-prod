import styles from  './Header.module.scss'

const navLinks = [{text:"Проекты холдинга", link:'#'},{text:"О холдинге", link:'#'},{text:"Продакшен", link:'#'},{text:"Вакансии", link:'#'},{text:"Контакты", link:'#'}]
export const Header = () => {
    return (
        <header className={styles.header}>
            <img src="/logo.svg" alt="Logo" className={styles.logo} />
            <div className={styles.linkContainer}>
                <div className={styles.links}>
                    {navLinks.map((item, i) => (
                        <div key={i}><a href={item.link}>{item.text}</a></div>
                    ))}
                </div>
            </div>
        </header>
    );
}