import { Component, OnInit } from '@angular/core';
import { FormateursService } from '../formateurs.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css'],
})
export class FormateursComponent implements OnInit {
  formateurList: any;
  test: any;
  constructor(private formateurService: FormateursService) {
    this.test = true;
    this.formateurList = this.formateurService.get();
  }

  ngOnInit(): void {
    console.log(this.formateurList)
  }

}
