import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirm: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  register() {
    const { password, confirm } = this.form.value;

    if (this.form.valid && password === confirm) {
      // Aquí podrías enviar los datos al backend
      alert('Usuario registrado correctamente');
      this.router.navigate(['/login']);
    } else {
      alert('Datos inválidos o las contraseñas no coinciden');
    }
  }
}
