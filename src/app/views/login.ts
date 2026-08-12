import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [InputTextModule, PanelModule, CheckboxModule, FloatLabelModule, TranslatePipe],
  standalone: true,
})
export class LoginComponent {
  public changeVisibilityPass(){
    
  }
}
