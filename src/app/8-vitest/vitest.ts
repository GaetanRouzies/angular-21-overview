import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-vitest',
  imports: [],
  templateUrl: './vitest.html',
})
export class Vitest {
  counter = signal(0)

  increment() {
    this.counter.update(value => value + 1)
  }

  decrement() {
    this.counter.update(value => value - 1)
  }
}

