import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
declare  var jQuery:  any;

@Component({
  selector: 'app-web-developer-contact-us',
  templateUrl: './web-developer-contact-us.component.html',
  styleUrls: ['./web-developer-contact-us.component.css']
})
export class WebDeveloperContactUsComponent implements OnInit {

  profile : any = {
                  logo:"logo-black.png",
                  profile:"web-developer"
            };

  page_banner : any = {
        title:"Contáctame",
        profile:"web-developer",
  };

  form: FormGroup;
  submitted = false;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { }

    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }

    ngOnInit(): void {

      this.form = this.formBuilder.group(
        {
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          subject: ['', Validators.required],
          message: ['', Validators.required],
        }
      );


      (function ($) {
        setTimeout(function(){
            if(jQuery('.dezPlaceAni').length) {

              $('.dezPlaceAni input, .dezPlaceAni textarea').on('focus',function(){
                $(this).parents('.form-group, .news-box').addClass('focused');
              });

              $('.dezPlaceAni input, .dezPlaceAni textarea').on('blur',function(){
                var inputValue = $(this).val();
                if ( inputValue == "" ) {
                $(this).removeClass('filled');
                $(this).parents('.form-group, .news-box').removeClass('focused');
                } else {
                $(this).addClass('filled');
                }
              })
            }
        }, 500);
      })(jQuery);

  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    const url = `https://api.sendgrid.com/v3/mail/send`;
    console.log(this.form.value);

    const headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set('Authorization', 'Bearer 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')
    this.httpClient
      .post(url, {
        personalizations: [{to: [{email: 'fabianluque2014@gmail.com'}], subject: this.form.value.subject}],
        from: {email: 'fabianluque2014@gmail.com'},
        content: [{type: 'text/plain', value: `correo : ${this.form.value.email} -- Nombre : ${this.form.value.name} -- Mensaje : ${this.form.value.message}` }]
      },
      {headers}
      )
      .subscribe(apiData => {
        this.onReset();
      });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
