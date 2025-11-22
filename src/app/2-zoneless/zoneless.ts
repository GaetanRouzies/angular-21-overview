import { Component, signal, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-zoneless',
  imports: [],
  templateUrl: './zoneless.html',
})
export class Zoneless implements OnDestroy {
  // Counter with Signals - works in zoneless mode
  counterWithSignal = signal(0)

  // Counter without Signals - won't work in zoneless mode
  counterWithoutSignal = 0

  private intervalWithSignal?: number
  private intervalWithoutSignal?: number

  // Track if intervals are running
  isRunningWithSignal = signal(false)
  isRunningWithoutSignal = signal(false)

  toggleWithSignal() {
    if (this.isRunningWithSignal()) {
      this.pauseWithSignal()
    } else {
      this.startWithSignal()
    }
  }

  toggleWithoutSignal() {
    if (this.isRunningWithoutSignal()) {
      this.pauseWithoutSignal()
    } else {
      this.startWithoutSignal()
    }
  }

  startWithSignal() {
    if (this.intervalWithSignal) {
      return
    }
    this.isRunningWithSignal.set(true)
    this.intervalWithSignal = window.setInterval(() => {
      this.counterWithSignal.update((value) => value + 1)
    }, 1000)
  }

  pauseWithSignal() {
    if (this.intervalWithSignal) {
      clearInterval(this.intervalWithSignal)
      this.intervalWithSignal = undefined
      this.isRunningWithSignal.set(false)
    }
  }

  startWithoutSignal() {
    if (this.intervalWithoutSignal) {
      return
    }
    this.isRunningWithoutSignal.set(true)
    this.intervalWithoutSignal = window.setInterval(() => {
      this.counterWithoutSignal++
    }, 1000)
  }

  pauseWithoutSignal() {
    if (this.intervalWithoutSignal) {
      clearInterval(this.intervalWithoutSignal)
      this.intervalWithoutSignal = undefined
      this.isRunningWithoutSignal.set(false)
    }
  }

  ngOnDestroy() {
    if (this.intervalWithSignal) {
      clearInterval(this.intervalWithSignal)
    }
    if (this.intervalWithoutSignal) {
      clearInterval(this.intervalWithoutSignal)
    }
  }
}
