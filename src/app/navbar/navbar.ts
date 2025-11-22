import { Component, computed, inject, signal } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { CommonModule } from '@angular/common'
import { filter } from 'rxjs'

interface Example {
  path: string
  title: string
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  private router = inject(Router)

  examples: Example[] = [
    { path: 'mcp', title: '1. MCP' },
    { path: 'zoneless', title: '2. Zoneless' },
    { path: 'provide-http-client', title: '3. ProvideHttpClient' },
    { path: 'regex', title: '4. Regex' },
    { path: 'form-array-directive', title: '5. FormArrayDirective' },
    { path: 'simple-change', title: '6. SimpleChange' },
    { path: 'angular-aria', title: '7. Angular Aria' },
    { path: 'vitest', title: '8. Vitest' },
    { path: 'signal-form', title: '9. SignalForm' },
  ]

  currentPath = signal<string>('')

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const path = event.urlAfterRedirects.replace('/', '') || 'mcp'
        this.currentPath.set(path)
      })

    // Set initial path
    const initialPath = this.router.url.replace('/', '') || 'mcp'
    this.currentPath.set(initialPath)
  }

  currentExample = computed(() => {
    return this.examples.find((ex) => ex.path === this.currentPath()) || this.examples[0]
  })

  currentIndex = computed(() => {
    return this.examples.findIndex((ex) => ex.path === this.currentPath())
  })

  previousExample = computed(() => {
    const index = this.currentIndex()
    return index > 0 ? this.examples[index - 1] : null
  })

  nextExample = computed(() => {
    const index = this.currentIndex()
    return index < this.examples.length - 1 ? this.examples[index + 1] : null
  })

  navigateTo(example: Example) {
    this.router.navigate([`/${example.path}`])
  }
}
