import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{


    signin(){
        return {msg:'I am signin'};
    }

 
    signup(){
        return {msg:'i am signup'};
    }
} 