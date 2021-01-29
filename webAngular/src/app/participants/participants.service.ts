import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { PARTICIPANTSLIST } from './participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }
  get() { return PARTICIPANTSLIST; }
  add(item: Participant) {
    item.id = PARTICIPANTSLIST.length + 1;
    PARTICIPANTSLIST.push(item);
  }
  delete(item: Participant) {
    let index = PARTICIPANTSLIST.indexOf(item);
    if (index >= 0) PARTICIPANTSLIST.splice(index, 1);
  }
  getLength() {
    return PARTICIPANTSLIST.length;
  }
  getFormateur(id: number) {
    return PARTICIPANTSLIST[id - 1];
  }
}
