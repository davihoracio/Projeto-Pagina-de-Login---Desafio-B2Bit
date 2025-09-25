import { PrimaryButton } from '../PrimaryButton';
import styles from './styles.module.css';

interface HeaderProps {
  onLogout: () => void;
}

export function Header({ onLogout }: HeaderProps) {
  return (
    <header className={styles.header}>
      <PrimaryButton onClick={onLogout} type="button">
        Logout
      </PrimaryButton>
    </header>
  );
}