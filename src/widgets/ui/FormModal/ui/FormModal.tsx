import { useState } from 'react';
import styles from './FormModal.module.scss';
import CustomPhoneInput from './PhoneInput';

export const FormModal = ({ isOpen, onClose }) => {
    const [companyName, setCompanyName] = useState('');
    const [directorName, setDirectorName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Обработка отправки формы
        console.log({ companyName, directorName, phone, email, request });
        onClose(); // Закрыть форму после отправки
    };

    return (
        isOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                    <form onSubmit={handleSubmit}>
                        <h2 className={styles.header}>
                            Мы открыты к сотрудничеству
                        </h2>
                        <div className={styles.textfield}>
                            <label>Название компании</label>
                            <input
                                placeholder="как вы называетесь?"
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                                className={styles.textInput}
                            />
                        </div>
                        <div className={styles.textfield}>
                            <label>ФИО Директора или представителя</label>
                            <input
                                placeholder="как к вам обращаться?"
                                type="text"
                                value={directorName}
                                onChange={(e) =>
                                    setDirectorName(e.target.value)
                                }
                                required
                                className={styles.textInput}
                            />
                        </div>
                        <CustomPhoneInput />
                        <div className={styles.textfield}>
                            <label>E-mail</label>
                            <input
                                placeholder="example@mail.ru"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.textInput}
                            />
                        </div>
                        <div className={styles.textfield}>
                            <label>Заявка</label>
                            <textarea
                                placeholder="Какой вид рекламы вас интересует?"
                                value={request}
                                onChange={(e) => setRequest(e.target.value)}
                                required
                                className={styles.textarea}
                            ></textarea>
                        </div>
                        <button type="submit">Отправить</button>
                        <p>
                            Отправляя данные, вы соглашаетесь с{' '}
                            <a
                                className={styles.link}
                                href="https://drive.google.com/file/d/1We8xIc-OoEnSGnEEl7eXKw2KCy3vONLf/view"
                            >
                                политикой конфиденциальности.
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        )
    );
};
