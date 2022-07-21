import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'users-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: any = FormGroup;
  isSubmitted = false;
  editmode = false;
  currentUserId: string | undefined;
  userForm: any;

  constructor( private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

  }


}
