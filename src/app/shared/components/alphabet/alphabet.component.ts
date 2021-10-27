import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {

  public ALPHABET = 'abcdefghijklmnopqrstuvxyz';
  @Output() buttonPressed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(letter: string): void {
    this.buttonPressed.emit(letter);
  }
}
