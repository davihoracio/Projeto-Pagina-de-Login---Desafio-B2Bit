import type { InputHTMLAttributes } from "react";
import styles from './styles.module.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

export function Input({label, ...props}: InputProps){
    return(
        <div className={styles.formGroup}>
            <label htmlFor={props.id}>{label}</label>
            <input className={styles.input} {...props} />
        </div>
    )
};