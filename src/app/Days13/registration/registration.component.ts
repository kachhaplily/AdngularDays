import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactServicesService } from '../Services/contact-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  myreg:FormGroup;

  constructor(private formbuilder: FormBuilder, private contactservice:ContactServicesService) {
    this.myreg = this.formbuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.min(4)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      phone:['',Validators.compose([Validators.required,Validators.pattern(/^[0-9]{10,}$/)])],
      address:['',Validators.compose([Validators.required,Validators.max(50)])]
    })


  }
  onSubmit(){
    if (this.myreg.valid) {
      this.contactservice.adddata(this.myreg.value).subscribe(y=>console.log(y))
    }
    else {
      console.log("error")
    }

  }

}
