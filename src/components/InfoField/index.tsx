import styles from './styles.module.css'

interface InfoFieldsProps{
  label: string;
  value: string;
}

export function InfoField({label, value}: InfoFieldsProps){
  return(
    <div className={styles.infoGroup}>
      <label>{label}</label>
      <div className={styles.infoField}>{value}
      </div>
    </div>
  );
}