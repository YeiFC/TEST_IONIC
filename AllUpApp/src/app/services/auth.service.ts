import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root',
})
export class AuthService {
private isAuthenticated = false;

login(email: string, password: string): boolean {
// Aquí puedes hacer la lógica real o simulada
if (email === 'admin@demo.com' && password === '123456') {
this.isAuthenticated = true;
localStorage.setItem('auth', 'true');
return true;
}
return false;
}

logout() {
this.isAuthenticated = false;
localStorage.removeItem('auth');
}

checkAuth(): boolean {
return localStorage.getItem('auth') === 'true';
}
}