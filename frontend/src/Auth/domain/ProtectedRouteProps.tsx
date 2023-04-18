import { User } from "./user";


export interface ProtectedRouteProps{
    currentUser:User;
    editToken:Function;
}