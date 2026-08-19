import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TranslatePipe } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, takeUntil } from 'rxjs';
import { TypeInputPass } from '../enums/type-input-pass.enum';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [
    InputTextModule,
    PanelModule,
    CheckboxModule,
    FloatLabelModule,
    TranslatePipe,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class LoginComponent implements OnInit, OnDestroy {
  public typeInput = TypeInputPass.PASSWORD;
  public loginForm = new FormGroup({
    pass: new FormControl<string>(''),
    checkPass: new FormControl<boolean>(false),
  });
  private _destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.loginForm
      .get('checkPass')
      ?.valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe((newValue) => {
        console.log(newValue);
        
         this.typeInput =newValue ? TypeInputPass.TEXT : TypeInputPass.PASSWORD;
      });
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
