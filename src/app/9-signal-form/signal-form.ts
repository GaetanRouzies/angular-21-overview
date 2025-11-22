import { Component, signal } from '@angular/core'
import { form, required } from '@angular/forms/signals'
import { Field } from '@angular/forms/signals'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-signal-form',
  imports: [CommonModule, Field],
  templateUrl: './signal-form.html',
})
export class SignalForm {
  model = signal({ name: '', email: '' })

  formTree = form(this.model, (f) => {
    required(f.name)
    required(f.email)
  })

  onSubmit() {
    const formState = this.formTree()
    if (formState.valid()) {
      console.log('Form values:', formState.value())
    }
  }
}
