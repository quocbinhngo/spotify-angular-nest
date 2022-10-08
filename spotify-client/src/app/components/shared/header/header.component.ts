import { Component, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faHeader,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSearch = faSearch;

  constructor() {}

  ngOnInit(): void {}
}
