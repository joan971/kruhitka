import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../../../../../libs/users/src/lib/services/users.service';
import { User } from './../../../../../../../libs/users/src/lib/models/users';
import { timer } from 'rxjs';

@Component({
  selector: 'admin-users-form',
  templateUrl: './users-form.component.html',
  styles: [
  ]
})
export class UsersFormComponent implements OnInit {


  form: any = FormGroup;
  isSubmitted = false;
  editmode = false;
  currentUserId: string | undefined;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._initUserForm();
    this._checkEditMode();
  }
  private _initUserForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      isAdmin: [false],
      street: [''],
      apartment: [''],
      zip: [''],
      city: [''],
      country: ['']
    });
  }

  private _addUser(user: User) {
    this.usersService.createUser(user).subscribe(
      (user: User) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `User ${user.name} is created!`
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'User is not created!'
        });
      }
    );
  }

  private _updateUser(user: User) {
    this.usersService.updateUser(user).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User is updated!'
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'User is not updated!'
        });
      }
    );
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editmode = true;
        this.currentUserId = params['id'];
        this.usersService.getUser(params['id']).subscribe((user) => {
          this.form.controls.name.setValue(user.name);
          this.form.controls.email.setValue(user.email);
          this.form.controls.phone.setValue(user.phone);
          this.form.controls.isAdmin.setValue(user.isAdmin);
          this.form.controls.street.setValue(user.street);
          this.form.controls.apartment.setValue(user.apartment);
          this.form.controls.zip.setValue(user.zip);
          this.form.controls.city.setValue(user.city);
          this.form.controls.country.setValue(user.country);

          this.form.controls.password.setValidators([]);
          this.form.controls.password.updateValueAndValidity();
        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      id: this.currentUserId,
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.userForm.password.value,
      phone: this.form.controls.phone.value,
      isAdmin: this.form.controls.isAdmin.value,
      street: this.form.controls.street.value,
      apartment: this.form.controls.apartment.value,
      zip: this.form.controls.zip.value,
      city: this.form.controls.city.value,
      country: this.form.controls.country.value
    };
    if (this.editmode) {
      this._updateUser(user);
    } else {
      this._addUser(user);
    }
  }

  onCancle() {
    this.location.back();
  }
  get userForm() {
    return this.form.controls;
  }
}
