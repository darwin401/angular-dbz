import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 200
    },
    {
      id: uuid(),
      name: 'Pikoro',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    }
  ];

  addNewCharacter( character: Character ):void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  };

  deleteById( id: string ) {
    const index = this.characters.findIndex(character => character.id === id);
    if( index !== -1 ) this.characters.splice( index, 1 );
  }
}
