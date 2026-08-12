import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ToDoList');
   private translate = inject(TranslateService);

  constructor() {

    this.translate.addLangs([
      'es',
      'en'
    ]);

    this.translate.setFallbackLang('es');

    this.translate.use('es');
  }
}
