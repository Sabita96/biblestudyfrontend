import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ContactService } from "app/services/contact-service/contact.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"],
})
export class ContactPageComponent implements OnInit {
  focus: any;
  focus1: any;
  contactForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      message: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      // fullName: [""],
      // message: [""],
      // email: [""],
      phone: [""],
    });
    // this.contactForm.valueChanges
    //   .map((value) => {
    //     // Here you can manipulate your value
    //     value.firstName = value.firstName.trim();
    //     return value;
    //   })
    //   .filter((value) => this.contactForm.valid)
    //   .subscribe((value) => {
    //     console.log(
    //       "Model Driven Form valid value: vm = ",
    //       JSON.stringify(value)
    //     );
    //   });
    // , {
    //     validator: MustMatch('password', 'confirmPassword')
    // });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    this.contactService.sendMail(this.contactForm.value).subscribe(
      (res) => {
        console.log("res", res);
        console.log("res.statusCode", res.statusCode, res.status);
        this.toastr.success("Your response has been submitted", "Success", {
          timeOut: 3000,
        });
        if (res.message === "Success") {
          // alert("success");
          this.onReset();
        }
      },
      (err) => {
        this.toastr.error("Server Error!!!", "Error", {
          timeOut: 3000,
        });
      }
    );
    // display form values on success
    // alert(
    //   "SUCCESS!! :-)\n\n" + JSON.stringify(this.contactForm.value, null, 4)
    // );
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
  trimValue(event) {
    event.target.value = event.target.value.trim();
  }
}
