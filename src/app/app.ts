import { Component, signal } from '@angular/core';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionType,
} from '@my-ui/accordion';
import { AspectRatio } from '@my-ui/aspect-ratio';
import { Button, ButtonGroup, ButtonVariant, ButtonSize } from '@my-ui/button';
import {
  AlertDialogComponent,
  AlertDialogActionComponent,
  AlertDialogCancelComponent,
  AlertDialogContentComponent,
  AlertDialogDescriptionComponent,
  AlertDialogFooterComponent,
  AlertDialogHeaderComponent,
  AlertDialogTitleComponent,
  AlertDialogTriggerComponent,
} from '@my-ui/alert-dialog';
import {
  AlertComponent,
  AlertTitleComponent,
  AlertDescriptionComponent,
  AlertVariant,
} from '@my-ui/alert';
import { AvatarComponent, AvatarImageComponent, AvatarFallbackComponent } from '@my-ui/avatar';
import { BadgeComponent, BadgeVariant } from '@my-ui/badge';
import {
  DropdownMenuComponent,
  DropdownMenuTriggerDirective,
  DropdownMenuContentComponent,
  DropdownMenuItemComponent,
  DropdownMenuLabelComponent,
  DropdownMenuSeparatorComponent,
  DropdownMenuGroupComponent,
  DropdownMenuShortcutComponent,
} from '@my-ui/dropdown-menu';
import {
  BreadcrumbComponent,
  BreadcrumbListComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  BreadcrumbPageComponent,
  BreadcrumbSeparatorComponent,
  BreadcrumbEllipsisComponent,
} from '@my-ui/breadcrumb';
import { LabelComponent } from '@my-ui/label';
import { InputComponent, InputErrorComponent } from '@my-ui/input';
import {
  SelectComponent,
  SelectTriggerComponent,
  SelectValueComponent,
  SelectContentComponent,
  SelectItemComponent,
  SelectGroupComponent,
  SelectLabelComponent,
  SelectSeparatorComponent
} from '@my-ui/select';
import {
  PopoverComponent,
  PopoverTriggerDirective,
  PopoverContentComponent
} from '@my-ui/popover';
import { CalendarComponent } from '@my-ui/calendar';

@Component({
  selector: 'app-root',
  imports: [
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    AspectRatio,
    Button,
    ButtonGroup,
    AlertDialogComponent,
    AlertDialogActionComponent,
    AlertDialogCancelComponent,
    AlertDialogContentComponent,
    AlertDialogDescriptionComponent,
    AlertDialogFooterComponent,
    AlertDialogHeaderComponent,
    AlertDialogTitleComponent,
    AlertDialogTriggerComponent,
    AlertComponent,
    AlertTitleComponent,
    AlertDescriptionComponent,
    AvatarComponent,
    AvatarImageComponent,
    AvatarFallbackComponent,
    BadgeComponent,
    DropdownMenuComponent,
    DropdownMenuTriggerDirective,
    DropdownMenuContentComponent,
    DropdownMenuItemComponent,
    DropdownMenuLabelComponent,
    DropdownMenuSeparatorComponent,
    DropdownMenuGroupComponent,
    DropdownMenuShortcutComponent,
    BreadcrumbComponent,
    BreadcrumbListComponent,
    BreadcrumbItemComponent,
    BreadcrumbLinkComponent,
    BreadcrumbPageComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbEllipsisComponent,
    LabelComponent,
    InputComponent,
    InputErrorComponent,
    SelectComponent,
    SelectTriggerComponent,
    SelectValueComponent,
    SelectContentComponent,
    SelectItemComponent,
    SelectGroupComponent,
    SelectLabelComponent,
    SelectSeparatorComponent,
    PopoverComponent,
    PopoverTriggerDirective,
    PopoverContentComponent,
    CalendarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-ui-lib-workspace');
  protected readonly AccordionType = AccordionType;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonSize = ButtonSize;
  protected readonly AlertVariant = AlertVariant;
  protected readonly BadgeVariant = BadgeVariant;
  
  // Calendar states
  selectedDate = signal<Date | undefined>(new Date());
  selectedRange = signal<{from: Date; to?: Date} | undefined>({
    from: new Date(2025, 0, 10),
    to: new Date(2025, 0, 20)
  });
  selectedMultiple = signal<Date[]>([]);
  protected customDropdownDate = signal<Date | undefined>(new Date());
  protected customDropdownDate2 = signal<Date | undefined>(new Date(2025, 1, 14));
  protected customDropdownDate3 = signal<Date | undefined>(new Date(2025, 2, 20));
  protected customDropdownDate4 = signal<Date | undefined>(new Date(2025, 3, 10));
  minDate = new Date();
  maxDate = new Date(2025, 11, 31);
  
  // Custom theme calendars
  protected customThemeRange1 = signal<{from: Date; to?: Date} | undefined>({
    from: new Date(2025, 1, 10),
    to: new Date(2025, 1, 15)
  });
  protected customThemeRange2 = signal<{from: Date; to?: Date} | undefined>({
    from: new Date(2025, 2, 5),
    to: new Date(2025, 2, 12)
  });
  protected customThemeRange3 = signal<{from: Date; to?: Date} | undefined>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 10)
  });
  protected customThemeDate1 = signal<Date | undefined>(new Date(2025, 4, 15));
  protected customThemeDate2 = signal<Date | undefined>(new Date(2025, 5, 20));
  protected customThemeDate3 = signal<Date | undefined>(new Date(2025, 6, 8));
  protected customThemeDate4 = signal<Date | undefined>(new Date(2025, 7, 25));
  protected customThemeDate5 = signal<Date | undefined>(new Date(2025, 8, 12));
  protected customThemeDate6 = signal<Date | undefined>(new Date(2025, 9, 18));
  
  disablePastDates = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  
  disableWeekends = (date: Date): boolean => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };
}
