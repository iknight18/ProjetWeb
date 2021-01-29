import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from './participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  formateursList: any;
  constructor(private formateurService: ParticipantsService) { }

  ngOnInit(): void {
    this.formateursList = this.formateurService.get();
    console.log(this.formateursList);
  }

}
