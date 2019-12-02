import { Component, OnInit,Input } from '@angular/core';
import { Animal1Service }  from '../animal1.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {
 blogger={
 place: '',
 experience: ''
 }
  constructor(
  private route: ActivatedRoute,
  private animalService: Animal1Service,
  private location: Location
) { 
   sessionStorage.getItem('username');
   console.log(sessionStorage.getItem('username'));
 }

  ngOnInit():void  {
  
  }
goBack(): void {
  this.location.back();
}
onBlog()
{
 
  this.animalService.onBloging(this.blogger).subscribe(blogger => {
  this.blogger=blogger; 
 });
 }
}

