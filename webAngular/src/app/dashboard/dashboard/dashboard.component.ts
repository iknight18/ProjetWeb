import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sessionsNbr = 2;
  formateursNbr = 5;
  participantsNbr = 7;
  constructor() { }

  ngOnInit(): void {
  }

}
