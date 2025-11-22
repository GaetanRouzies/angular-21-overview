import { CommonModule } from '@angular/common'
import { Component, input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
})
export class Child implements OnChanges {
  value = input.required<string>()

  previousValue: string = ''
  currentValue: string = ''

  ngOnChanges(changes: SimpleChanges<{ value: string }>): void {
    if (changes.value) {
      this.previousValue = changes.value.previousValue || ''
      this.currentValue = changes.value.currentValue || ''
    }
  }
}
