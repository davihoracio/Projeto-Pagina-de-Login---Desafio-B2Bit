import axios from 'axios';

//Criar uma instância do axios com a URL base da API
export const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br'
});

//Criar o  interceptor de requisição
api.interceptors.request.use(
  (config) => {

    //Buscar o token no LocalStorage
    const token = localStorage.getItem('@b2bit.token');

    //Se o token existir, adiciono ao header de Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    //Adicionando os headers que são comuns a todas as requisições
    config.headers.Accept = 'application/json;version=v1_web';
    config.headers['Content-Type'] = 'application/json';

    //Retornando a configuração para que a requisição possa continuar
    return config;
  },
  (error) => {
    // Esta função é executada se houver um erro na configuração da requisição
    return Promise.reject(error);
  }
);