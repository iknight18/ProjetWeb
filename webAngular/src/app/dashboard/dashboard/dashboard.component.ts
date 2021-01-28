import { Component, OnInit } from '@angular/core';
import { SessionsService } from 'src/app/sessions/sessions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sessionsNbr: number;
  formateursNbr = 5;
  participantsNbr = 7;
  constructor(private sessionItemService: SessionsService) {
    this.sessionsNbr = sessionItemService.getLength();
  }

  ngOnInit(): void {
  }

}
