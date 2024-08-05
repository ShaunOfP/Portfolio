import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent implements OnInit{
  isChecked: boolean = false;
  http = inject(HttpClient);
  // form: ReactiveFormsModule = new FormGroup({
  //   name,
  //   email,
  //   message
  // });

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
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
            this.userFeedbackAnimation();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.userFeedbackAnimation();
      console.log("success");
    }
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  userFeedbackAnimation() {
    const successMessage = document.getElementById('msgSuccess');


    if (successMessage) {
      successMessage.style.display = 'flex';

      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 1500);
    }
  }

  ngOnInit(): void {
    // const form: ReactiveFormsModule = new FormGroup({
    //   name: new FormControl(form.get('name'), [
    //     Validators.required,
    //     Validators.minLength(4),
    //   ]),
    //   email: new FormControl(),
    //   message: new FormControl()
    // });
  }
}
