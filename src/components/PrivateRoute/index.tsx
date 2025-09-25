import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute(){
    //Buscar o token no LocalStorage
    const token = localStorage.getItem('@b2bit.token');

    //Se o token existir, renderiza o conteúdo da rota
    //O Outlet vai renderizar o componente filho que defini no  router (a página Profile).
    //Se caso não existir, recidireciono para a pagina de login.
    return token ? <Outlet/> : <Navigate to = "/login"/>;
}