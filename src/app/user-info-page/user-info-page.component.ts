import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
