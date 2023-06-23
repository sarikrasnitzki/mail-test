import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailRequest } from 'src/app/models/mail';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-mail',
  templateUrl: './user-mail.component.html',
  styleUrls: ['./user-mail.component.scss']
})
export class UserMailComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
  });
  submitted!: boolean;
  receivedDate!: Date;
  sentMail: any;
  mailRequest: MailRequest={} as MailRequest;
  constructor(private formBuilder: FormBuilder, public userservice: UserService) {

  }
  ngOnInit(): void {

    this.form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
    }
    );
 }

  onSubmit(): void {
    this.submitted = true;
    this.mailRequest.mail = this.f["email"].value;
    this.sentMail = this.userservice.sendMail(this.mailRequest).subscribe(mail => this.receivedDate = mail.date);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
