import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); // Ссылка на меню

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Очистка обработчика при размонтировании
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

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
                        <a href="/blank">Проекты холдинга</a>
                    </div>
                    <div>
                        <a href="/blank">О холдинге</a>
                    </div>
                    <div>
                        <a href="/komanda">Продакшен</a>
                    </div>
                    <div>
                        <a href="/blank">Вакансии</a>
                    </div>
                    <div>
                        <a href="/blank">Контакты</a>
                    </div>
                </div>
                <div className={styles.burger} onClick={toggleMenu}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>
            </div>
            <div
                ref={menuRef} // Установка ссылки на меню
                className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}
            >
                <button className={styles.closeButton} onClick={closeMenu}>
                    &times; {/* Иконка "X" для закрытия */}
                </button>
                <div className={styles.mobileLinkList}>
                    <div>
                        <a
                            href="/blank"
                            onClick={closeMenu}
                            className={styles.link}
                        >
                            Проекты холдинга
                        </a>
                    </div>
                    <div>
                        <a
                            href="/blank"
                            onClick={closeMenu}
                            className={styles.link}
                        >
                            О холдинге
                        </a>
                    </div>
                    <div>
                        <a
                            href="/komanda"
                            onClick={closeMenu}
                            className={styles.link}
                        >
                            Продакшен
                        </a>
                    </div>
                    <div>
                        <a
                            href="/blank"
                            onClick={closeMenu}
                            className={styles.link}
                        >
                            Вакансии
                        </a>
                    </div>
                    <div>
                        <a
                            href="/blank"
                            onClick={closeMenu}
                            className={styles.link}
                        >
                            Контакты
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
