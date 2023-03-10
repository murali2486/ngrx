export class User{
    constructor(
        private Idtoken: string, 
        private email: string, 
        private uid: string, 
        private expiresIn: Date){}
}