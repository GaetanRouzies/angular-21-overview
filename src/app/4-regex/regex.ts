import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-regex',
  imports: [CommonModule],
  templateUrl: './regex.html',
})
export class Regex {
  text =
    'Contact us at support@example.com or sales@company.fr. Call +33 6 12 34 56 78 or +33 7 89 01 23 45'
}
