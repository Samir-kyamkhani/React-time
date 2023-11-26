import conf from "../conf/conf"
import {Account, ID, Client} from "appwrite"

export class AuthSevice {
    client = new Client();
    account;

    constructor() {
            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name); 
           if (userAccount) {
                return this.login({email, password});
           } else {
                return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
           return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            
        } catch (error) {
            
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
           throw error; 
        }
    }
}

const authService = new AuthSevice();
export default authService;