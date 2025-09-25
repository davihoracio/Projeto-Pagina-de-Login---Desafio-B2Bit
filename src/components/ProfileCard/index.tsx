import styles from './styles.module.css';
import { InfoField } from '../InfoField';

interface UserData {
  name: string;
  email: string;
  avatar: {
    low: string;
  };
}

interface ProfileCardProps {
  user: UserData;
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <h2>Profile picture</h2>
      <img
        src={user.avatar.low}
        alt={`Foto de ${user.name}`}
        className={styles.profilePicture}
      />

      <InfoField label="Your Name" value={user.name} />
      <InfoField label="Your E-mail" value={user.email} />

    </div>
  );
}