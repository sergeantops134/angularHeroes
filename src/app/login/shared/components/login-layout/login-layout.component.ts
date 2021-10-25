import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginLayoutComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
