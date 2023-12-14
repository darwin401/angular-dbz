import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList : Character[] = [
    {
      id: uuid(),
      name: 'Pan',
      power: 50
    }
  ];

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById( id: string ):void {
    this.onDeleteById.emit(id);
  }




}
