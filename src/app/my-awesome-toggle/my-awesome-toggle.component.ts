import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

const provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyAwesomeToggleComponent),
  multi: true,
};

@Component({
  selector: 'app-awesome-toggle',
  template: `
    <div class="slider-rail" [class.toggle-checked]="checked">
      <div class="toggle-handler"></div>
    </div>
    <span class="label"><ng-content></ng-content></span>
  `,
  styleUrls: ['./my-awesome-toggle.component.css'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(click)': 'toggleState()'
  },
  providers: [provider],
})
export class MyAwesomeToggleComponent implements ControlValueAccessor {
  checked = false;
  changed: (_: any) => {};
  writeValue(obj: any): void {
    this.checked = obj;
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {}

  toggleState() {
    this.checked = !this.checked;
    this.changed(this.checked);
  }
}
