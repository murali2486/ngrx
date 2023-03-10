import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/authResponseData.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseData>{
    return this.httpClient.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.API_KEY}`, {email, password, returnSecureToken: true});
  }

  formatUser(data: AuthResponseData){
    const expiresIn = new Date(new Date().getTime() + (+data.expiresIn) * 1000)
    const user = new User(data.idToken, data.email, data.localId, expiresIn);
    return user;
  }
}
