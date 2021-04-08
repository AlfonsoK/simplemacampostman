import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'client';

  postForm: FormGroup;
  formattedOutput: any = {testing: "Haven't executed a request."};

  ngOnInit(): void{
    this.postForm = this.fb.group({
      method: ['POST'],
      url: ['localhost:4200/'],
      params: [],
      body: [],
      headers: []
    })
  }

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) { }

  submitForm(): void{
    let method = this.postForm.value.method
    let url = this.postForm.value.url
    let options = {
      body: this.postForm.value.body,
      params: this.postForm.value.params,
      headers: this.postForm.value.headers
    }
    this.httpClient.request(
      method,
      url,
      options
    )
    .subscribe(
      res => {
        this.formattedOutput = res
      },
      err => {
        this.formattedOutput = err
      }
    ); 
  }
}
