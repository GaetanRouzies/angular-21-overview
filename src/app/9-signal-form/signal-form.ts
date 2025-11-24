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
  person = signal({ name: '', email: '' })

  form = form(this.person, (path) => {
    required(path.name)
    required(path.email)
  })

  onSubmit() {
    if (this.form().valid()) {
      console.log('Form values:', this.form().value())
    }
  }
}
