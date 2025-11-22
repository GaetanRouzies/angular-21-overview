import { Component, signal } from '@angular/core'
import { Child } from './child/child'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-simple-change',
  imports: [Child, FormsModule],
  templateUrl: './simple-change.html',
})
export class SimpleChange {
  value = signal('Initial Value')
}
