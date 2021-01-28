import { Injectable } from '@angular/core';
import { Formateur } from './formateur';
import { FORMATEURLIST } from './formateurs';

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  constructor() { }
  get() { return FORMATEURLIST; }
  add(formateurItem: Formateur) {
    formateurItem.id = FORMATEURLIST.length + 1;
    FORMATEURLIST.push(formateurItem);
  }
  delete(formateurItem: Formateur) {
    let index;
    index = FORMATEURLIST.indexOf(formateurItem);
    if (FORMATEURLIST.indexOf(formateurItem) >= 0) {
      FORMATEURLIST.splice(index, 1);
    }
  }
  getLength() {
    return FORMATEURLIST.length;
  }
  getSession(id: number) {
    return FORMATEURLIST[id - 1];
  }
}
