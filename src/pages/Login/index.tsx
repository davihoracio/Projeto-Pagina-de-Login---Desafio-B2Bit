// Hooks do React para estado e navegação
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// O serviço de API centralizado
import { api } from '../../services/api';

// Os componentes de UI do Shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// A imagem do logo
import logoB2bit from '../../assets/logo-b2bit.png';

export function Login(){
    //Para a navegação
    const navigate = useNavigate();

    //Estados para guardar o login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Estados para carregamento de tela
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleLogin(){
        setIsLoading(true);
        setError('');

        try{
            // 2. Tenta fazer o login com os dados do estado
            const response = await api.post('/auth/login/', { email, password });

            // 3. Se der certo: guarda o token e redireciona
            const accessToken = response.data.tokens.access;
            localStorage.setItem('@b2bit.token', accessToken);
            navigate('/profile');
        } catch(error){
            setError('E-mail ou senha inválidos. Tente novamente.');
            console.error('Erro no Login.', error);
        } finally{
            // 5. Independentemente do resultado, desativa o "carregando"
            setIsLoading(false);
        }
    }
    
    return(
        <div className='min-h-screen bg-branco-1 flex items-center justify-center'>
            <Card className='w-auto shadow-[0_0px_56px_0_rgba(0,0,0,0.25)]'>
                <CardHeader className='text-center'>
                    <img src={logoB2bit} alt="Logo B2Bit" className='w-64 mx-auto my-3'/>
                </CardHeader>
                <CardContent>
                    <div className='grid gap-4'> {/*Grid para criar os espaçamentos entre os elementos*/}
                        
                        {/*Campo E-mail*/}
                        <div className='grid gap-2 text-left'>
                            <Label htmlFor='email'>
                                E-mail                                
                            </Label>
                            <Input
                            id = 'email'
                            type = 'email'
                            placeholder='Digite aqui seu e-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled = {isLoading}
                            />
                        </div>

                        {/*Campo Senha*/}
                        <div className='grid gap-2 text-left'>
                            <Label htmlFor='password'>
                                Password
                            </Label>
                            <Input
                                id='password'
                                type='password'
                                placeholder='Digite aqui sua senha'  
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/*Mensagem de erro caso aconteça*/}
                        {error && <p className='text-xs text-red-500 text-center'>{error}</p>}

                        {/*Botão de login*/}
                        <Button onClick={handleLogin} disabled = {isLoading} 
                        className='w-full bg-azul-b2 hover:bg-azul-b2-dark disabled:bg-azul-b2-dark disabled:opacity-90 mb-3 font-semibold'>
                            {isLoading ? 'Carregando...' : 'Sign In'}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}