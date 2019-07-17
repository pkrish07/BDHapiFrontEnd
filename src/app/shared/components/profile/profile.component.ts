import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/BDImage.png';
  userName: string = 'BD HAPI Device';
  userPost: string = 'Smart - Proactive Application for Device Management';
  
  constructor() { }

  ngOnInit() {
  }

}
