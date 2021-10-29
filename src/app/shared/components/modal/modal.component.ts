import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {

  @Input() message: string = '';
  @Input() button: boolean = true;

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }


  public closeModal(): void {
      this.onClose.emit();
  }
}
