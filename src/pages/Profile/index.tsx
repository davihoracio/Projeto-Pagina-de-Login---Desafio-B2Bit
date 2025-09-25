import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { ProfileCard } from '../../components/ProfileCard';

interface UserData {
  name: string;
  email: string;
  avatar: {
    low: string;
  };
}

export function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const token = localStorage.getItem('@b2bit.token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get('https://api.homologation.cliqdrive.com.br/auth/profile/', {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json;version=v1_web',
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserData();
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem('@b2bit.token');
    navigate('/login');
  }

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <Header onLogout={handleLogout} />
      <main className={styles.profileContainer}>
        {userData && <ProfileCard user={userData} />}
      </main>
    </div>
  );
}