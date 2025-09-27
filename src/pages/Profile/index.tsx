// Hooks do React para estado e navegação
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// O serviço de API centralizado
import { api } from '../../services/api';

// Os componentes de UI do Shadcn
import { InfoField } from '@/components/InfoField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserData{
  name: string;
  email: string;
  avatar: {
    medium: string;
  }
}

export function Profile(){
  /*Redirecionar o usuário*/
  const navigate = useNavigate();
  
  /*Estado para guardar os dados do perfil*/
  const [userData, setUserData] = useState<UserData | null>(null);

  /*Estado pra controlar o feedback de carregamento*/
  const [isLoading, setIsLoading] = useState(true);

  /*Este hook executa o código aqui dentro uma única vez, quando a página carrega*/
  useEffect(() =>{
    async function fetchUserData(){
      const token = localStorage.getItem('@b2bit.token');
      /*Se não tiver token, mando para o login*/
      if(!token){
        navigate('/login');
        return;
      }
      try{
        /*Buscar os dados do perfil na API*/
        const response = await api.get('/auth/profile/');
        setUserData(response.data);
      }catch (error){
        console.error("Erro ao buscar dados do perfil:", error);
        navigate('/login');
      }finally{
        setIsLoading(false);
      }
    }

    fetchUserData();
  }, [navigate]);

  /*Função para logout*/
  function handleLogout(){
    localStorage.removeItem('@b2bit.token');
    navigate('/login');
  }

  if(isLoading){
    return(
      <div className='min-h-screen flex items-center justify-center'>
        <p>Carregando...</p>
      </div>
    );
  }

  /*Quando o carregamento terminar, mostra a pagina completa*/
  return(
    <div className='min-h-screen bg-gray-100'>
      {/*Cabeçalho da pagina*/}
      <header className=' bg-white shadow-sm'>
        <div className='mx-auto py-4 sm:px-6 lg:px-8 flex justify-end'>
            <Button onClick={handleLogout} className='w-60 bg-azul-b2 hover:bg-azul-b2-dark disabled:bg-azul-b2-dark disabled:opacity-90 font-semibold'>
              Logout
            </Button>
        </div>
      </header>

      {/*Conteúdo principal*/}
      <main className='flex justify-center items-center py-20 px-4 bg-azul-background'>
        {userData && (
          <Card className='w-full max-w-sm shadow-[0_0px_10px_0_rgba(0,0,0,0.10)]'>
            <CardHeader className='items-center text-center'>
              <CardTitle className='text-center font-medium text-sm text-gray-600' >
                Profile picture
              </CardTitle>
              <Avatar className='w-16 h-16 mb-4 rounded-xl'>
                <AvatarImage 
                src={userData.avatar.medium} 
                alt={`Foto de ${userData.name}`}
                className='object-cover'
                />
                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>

            </CardHeader>
            <CardContent className='grid gap-4'>
              <InfoField
                label='Your '
                labelBold='Name'
                value={userData.name}
              />
              <InfoField
                label='Your '
                labelBold='E-mail'
                value={userData.email}
              />           
            </CardContent>            
          </Card>
        )}

      </main>
    </div>
  );
}

