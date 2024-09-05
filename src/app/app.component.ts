import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngPipes';
  count:number=285645;
  decValue:number=3.84674;
  price:number=99.99;
  today:Date=new Date();
  postObj:object={
    id:1,
    postTitle: "Post 1"
  };
  postArray:Array<string> =[
    "post1",
    "post2",
    "post3",
    "post4",
    "post5",
  ];
  userDetails={
    name:"iser 1",
    city:"newyork",
    countryCode:"us"
  }
  dummyText:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
