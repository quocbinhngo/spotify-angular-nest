import { Component, OnInit } from '@angular/core';
import {
  faHouse,
  faSearch,
  faMusic,
  faPlus,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  faUser = faUser;
  faHouse = faHouse;
  faSearch = faSearch;
  faMusic = faMusic;
  faPlus = faPlus;
  faHeart = faHeart;

  constructor() {}

  ngOnInit(): void {}
}
