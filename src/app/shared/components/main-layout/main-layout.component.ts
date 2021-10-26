import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private _router: Router,
    public authService: AuthService,
  ) { }

  public ngOnInit(): void {
  }

  public logout(event: Event): void {
    this.authService.logout();
    this._router.navigate(['/login', 'signin']);
  }
}
