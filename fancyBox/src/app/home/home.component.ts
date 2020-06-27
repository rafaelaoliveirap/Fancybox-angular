import { Component, OnInit } from '@angular/core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  faArrowRight = faArrowRight
  faArrowLeft = faArrowLeft

  ngOnInit() {
    window.scroll(0, 0)
  }

}

