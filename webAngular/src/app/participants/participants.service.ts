import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { PARTICIPANTLIST } from './participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }
  get() { return PARTICIPANTLIST; }
  add(participantItem: Participant) {
    participantItem.id = PARTICIPANTLIST.length + 1;
    PARTICIPANTLIST.push(participantItem);
  }

  delete(participantItem: Participant) {
    let index;
    index = PARTICIPANTLIST.indexOf(participantItem);
    if (PARTICIPANTLIST.indexOf(participantItem) >= 0) {
      PARTICIPANTLIST.splice(index, 1);
    }
  }
  getLength() {
    return PARTICIPANTLIST.length;
  }
  getSession(id: number) {
    return PARTICIPANTLIST[id - 1];
  }
}
