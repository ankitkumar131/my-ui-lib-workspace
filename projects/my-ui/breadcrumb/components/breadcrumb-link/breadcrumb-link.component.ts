import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-breadcrumb-link',
  templateUrl: './breadcrumb-link.component.html',
  styleUrls: ['./breadcrumb-link.component.scss'],
  standalone: true,
  imports: []
})
export class BreadcrumbLinkComponent {
  @Input() href: string = '';
}
