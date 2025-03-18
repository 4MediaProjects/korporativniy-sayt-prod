import { SetStateAction, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './FormModal.module.scss';

const CustomPhoneInput = ({
    value,
    onChange,
}: {
    value: any;
    onChange: SetStateAction<any>;
}) => {
    return (
        <div className={styles.textfield}>
            <label>Рабочий телефон</label>
            <PhoneInput
                country={'ru'}
                value={value}
                onChange={onChange}
                inputStyle={{
                    width: '100%',
                    padding: '10px 50px',
                    borderRadius: '10px',
                    border: '1px solid #000000',
                }}
                buttonStyle={{
                    border: 'none',
                    background: 'transparent',
                    height: '20px',
                    marginTop: '8px',
                    marginLeft: '5px',
                }}
                containerStyle={{ width: '100%' }}
                dropdownStyle={{
                    zIndex: 1000,
                }}
                placeholder="(999) 999-99-99"
                specialLabel=""
                enableSearch
            />
        </div>
    );
};

export default CustomPhoneInput;
