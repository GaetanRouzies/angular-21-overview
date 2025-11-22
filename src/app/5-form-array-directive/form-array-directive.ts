import { Component } from '@angular/core'
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-form-array-directive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-array-directive.html',
})
export class FormArrayDirective {
  formArray = new FormArray<FormControl<string | null>>([
    new FormControl('Item 1'),
    new FormControl('Item 2'),
  ])

  addItem() {
    this.formArray.push(new FormControl(''))
  }

  removeItem(index: number) {
    this.formArray.removeAt(index)
  }
}
