import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent {

  public readonly ALPHABET = 'abcdefghijklmnopqrstuvxyz';
  @Output() buttonPressed: EventEmitter<string> = new EventEmitter<string>();

  public onClick(letter: string): void {
    this.buttonPressed.emit(letter);
  }
}
