import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbListComponent } from './components/breadcrumb-list/breadcrumb-list.component';
import { BreadcrumbItemComponent } from './components/breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbLinkComponent } from './components/breadcrumb-link/breadcrumb-link.component';
import { BreadcrumbPageComponent } from './components/breadcrumb-page/breadcrumb-page.component';
import { BreadcrumbSeparatorComponent } from './components/breadcrumb-separator/breadcrumb-separator.component';
import { BreadcrumbEllipsisComponent } from './components/breadcrumb-ellipsis/breadcrumb-ellipsis.component';

@NgModule({
  imports: [
    BreadcrumbComponent,
    BreadcrumbListComponent,
    BreadcrumbItemComponent,
    BreadcrumbLinkComponent,
    BreadcrumbPageComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbEllipsisComponent
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbListComponent,
    BreadcrumbItemComponent,
    BreadcrumbLinkComponent,
    BreadcrumbPageComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbEllipsisComponent
  ]
})
export class UiBreadcrumbModule { }
