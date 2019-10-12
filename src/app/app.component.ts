import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `

    <form #form="ngForm" (ngSubmit)="onSubmit(form)">
      <div class="form-group">
        <label for="name">Podaj imię:</label>
        <input type="text" name="name" ngModel required />
      </div>
      <br />
      <div class="form-group">
        <app-awesome-toggle name="rodo" ngModel required>
          Zaznacz zgode na oddanie nerki
        </app-awesome-toggle>
        <!-- <input id="rodo" type="checkbox" name="rodo" ngModel required /> -->
        <!--<label for="rodo" [class.required]="form.invalid">Zaznacz zgode na oddanie nerki</label>-->
      </div>
      <button type="submit">Wyślij</button>
    </form>

    <div class="result">
      <div class="result-line">
        status: <b>{{ form.status }}</b>
      </div>
      <div class="result-line">value:</div>
      <pre>{{ form.value | json }}</pre>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  someBoolean = false;
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(JSON.stringify(form.value, null, 2));
    }
  }
}
