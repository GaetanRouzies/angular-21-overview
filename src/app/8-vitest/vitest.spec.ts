import { TestBed } from '@angular/core/testing'
import { Vitest } from './vitest'

describe('Vitest', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vitest],
    }).compileComponents()
  })

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Vitest)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })

  it('should initialize counter at 0', () => {
    const fixture = TestBed.createComponent(Vitest)
    const component = fixture.componentInstance
    expect(component.counter()).toBe(0)
  })

  it('should increment counter', () => {
    const fixture = TestBed.createComponent(Vitest)
    const component = fixture.componentInstance
    component.increment()
    expect(component.counter()).toBe(1)
    component.increment()
    expect(component.counter()).toBe(2)
  })

  it('should decrement counter', () => {
    const fixture = TestBed.createComponent(Vitest)
    const component = fixture.componentInstance
    component.increment()
    component.increment()
    component.decrement()
    expect(component.counter()).toBe(1)
  })

  it('should render counter value', async () => {
    const fixture = TestBed.createComponent(Vitest)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    const counterElement = compiled.querySelector('.border.rounded.p-4.bg-white p')
    expect(counterElement?.textContent).toContain('Counter: 0')
  })
})
