import { Routes } from '@angular/router'
import { Mcp } from './1-mcp/mcp'
import { Zoneless } from './2-zoneless/zoneless'
import { ProvideHttpClient } from './3-provide-http-client/provide-http-client'
import { Regex } from './4-regex/regex'
import { FormArrayDirective } from './5-form-array-directive/form-array-directive'
import { SimpleChange } from './6-simple-change/simple-change'
import { AngularAria } from './7-angular-aria/angular-aria'
import { Vitest } from './8-vitest/vitest'
import { SignalForm } from './9-signal-form/signal-form'

export const routes: Routes = [
  { path: 'mcp', component: Mcp },
  { path: 'zoneless', component: Zoneless },
  { path: 'provide-http-client', component: ProvideHttpClient },
  { path: 'regex', component: Regex },
  { path: 'form-array-directive', component: FormArrayDirective },
  { path: 'simple-change', component: SimpleChange },
  { path: 'angular-aria', component: AngularAria },
  { path: 'vitest', component: Vitest },
  { path: 'signal-form', component: SignalForm },
  { path: '', redirectTo: '/mcp', pathMatch: 'full' },
]
