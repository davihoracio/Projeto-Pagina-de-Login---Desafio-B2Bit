import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import logoB2Bit from '../../assets/logo-b2bit.png';
import { Input } from '../../components/Input';
import { PrimaryButton } from '../../components/PrimaryButton';
import { api } from '../../services/api';



export function Login(){
    //Criar todos os estados
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); //Inicia não carregado
    const [error, setError] = useState(''); //Inicia sem erros

    //Inicializa o hook
    const navigate = useNavigate(); 

    //Criar função assíncrona de login
    async function handleLogin() {
        //Reseta o estado de erro e inicia o carregamento
        setError('');
        setIsLoading(true);

        try{
            //Fazer chamada API com axios
            const response = await api.post(
                '/auth/login/', //Final do endpoint
                { email, password }
            );

            const accessToken = response.data.tokens.access;
            localStorage.setItem('@b2bit.token', accessToken);
            navigate('/profile');

         }catch(error){
            //Caso de erro
            console.error('Erro no Login.', error);
            setError('E-mail ou senha inválidos. Tente novamente.');
         }finally{
            setIsLoading(false);
         }

    }

    return(
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <img src={logoB2Bit} alt="Logo B2Bit" className={styles.logo}/>

                <Input
                    label='E-mail'
                    id='email'
                    type='email'
                    placeholder='Digite aqui seu e-mail'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled = {isLoading}
                />
                
                <Input
                    label='Password'
                    id='password'
                    type='password'
                    placeholder='Digite aqui sua senha'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    disabled = {isLoading}
                />
                {error && <p className={styles.error}>{error}</p>} 

                <PrimaryButton type='button' onClick={handleLogin} disabled={isLoading}>
                    {isLoading ? 'Carregando...' : 'Sign In'}
                </PrimaryButton>
            </div>
        </div>
    );
}
