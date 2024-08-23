import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  isChecked: boolean = false;
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  mailTest = false;

  post = {
    endPoint: 'http://sven-roesgen.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.addActiveClass();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.addActiveClass();
    }
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  addActiveClass() {
    document.querySelector('button[type="submit"]')?.classList.add('btn-active');
    document.getElementById('msgSuccess')?.classList.add('mail-active');
    setTimeout(() => {
      document.querySelector('button[type="submit"]')?.classList.remove('btn-active');
      document.getElementById('msgSuccess')?.classList.remove('mail-active');
    }, 2000);
  }
}
