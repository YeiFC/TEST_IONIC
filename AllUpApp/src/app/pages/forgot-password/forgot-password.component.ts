import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  recover() {
    if (this.form.valid) {
      const { email } = this.form.value;
      // Aquí podrías llamar a un endpoint real
      alert(`Se ha enviado un enlace de recuperación a ${email}`);
      this.router.navigate(['/login']);
    } else {
      alert('Ingrese un correo válido');
    }
  }
}
