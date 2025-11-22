import { Component, signal } from '@angular/core'
import { Toolbar, ToolbarWidget } from '@angular/aria/toolbar'

@Component({
  selector: 'app-angular-aria',
  imports: [Toolbar, ToolbarWidget],
  templateUrl: './angular-aria.html',
  styleUrl: './angular-aria.css',
})
export class AngularAria {
  // State for non-ARIA version
  boldState = signal(false)
  italicState = signal(false)
  underlineState = signal(false)
}
