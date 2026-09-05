import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionType,
} from '@my-ui/components/accordion';
import { AspectRatio } from '@my-ui/components/aspect-ratio';
import { Button, ButtonGroup, ButtonVariant, ButtonSize } from '@my-ui/components/button';
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
} from '@my-ui/components/alert-dialog';
import {
  AlertComponent,
  AlertTitleComponent,
  AlertDescriptionComponent,
  AlertVariant,
} from '@my-ui/components/alert';
import { AvatarComponent, AvatarImageComponent, AvatarFallbackComponent } from '@my-ui/components/avatar';
import { BadgeComponent, BadgeVariant } from '@my-ui/components/badge';
import {
  DropdownMenuComponent,
  DropdownMenuTriggerDirective,
  DropdownMenuContentComponent,
  DropdownMenuItemComponent,
  DropdownMenuLabelComponent,
  DropdownMenuSeparatorComponent,
  DropdownMenuGroupComponent,
  DropdownMenuShortcutComponent,
} from '@my-ui/components/dropdown-menu';
import {
  BreadcrumbComponent,
  BreadcrumbListComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  BreadcrumbPageComponent,
  BreadcrumbSeparatorComponent,
  BreadcrumbEllipsisComponent,
} from '@my-ui/components/breadcrumb';
import { LabelComponent } from '@my-ui/components/label';
import { InputComponent, InputErrorComponent } from '@my-ui/components/input';
import {
  SelectComponent,
  SelectTriggerComponent,
  SelectValueComponent,
  SelectContentComponent,
  SelectItemComponent,
  SelectGroupComponent,
  SelectLabelComponent,
  SelectSeparatorComponent
} from '@my-ui/components/select';
import {
  PopoverComponent,
  PopoverTriggerDirective,
  PopoverContentComponent
} from '@my-ui/components/popover';
import { CalendarComponent } from '@my-ui/components/calendar';
import {
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardDescriptionComponent,
  CardActionComponent,
  CardContentComponent,
  CardFooterComponent
} from '@my-ui/components/card';
import {
  CarouselComponent,
  CarouselContentComponent,
  CarouselItemComponent,
  CarouselPreviousComponent,
  CarouselNextComponent
} from '@my-ui/components/carousel';
import { UiCheckboxModule } from '@my-ui/components/checkbox';
import { UiCollapsibleModule } from '@my-ui/components/collapsible';
import { UiComboboxModule } from '@my-ui/components/combobox';
import {
  CommandComponent,
  CommandInputComponent,
  CommandListComponent,
  CommandEmptyComponent,
  CommandGroupComponent,
  CommandItemComponent,
  CommandSeparatorComponent,
  CommandShortcutComponent
} from '@my-ui/components/command';
import {
  ContextMenuComponent,
  ContextMenuTriggerDirective,
  ContextMenuContentComponent,
  ContextMenuItemComponent,
  ContextMenuCheckboxItemComponent,
  ContextMenuRadioGroupComponent,
  ContextMenuRadioItemComponent,
  ContextMenuLabelComponent,
  ContextMenuSeparatorComponent,
  ContextMenuShortcutComponent,
  ContextMenuSubComponent,
  ContextMenuSubTriggerComponent,
  ContextMenuSubContentComponent,
} from '@my-ui/components/context-menu';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
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
    CalendarComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardActionComponent,
    CardContentComponent,
    CardFooterComponent,
    CarouselComponent,
    CarouselContentComponent,
    CarouselItemComponent,
    CarouselPreviousComponent,
    CarouselNextComponent,
    UiCheckboxModule,
    UiCollapsibleModule,
    UiComboboxModule,
    CommandComponent,
    CommandInputComponent,
    CommandListComponent,
    CommandEmptyComponent,
    CommandGroupComponent,
    CommandItemComponent,
    CommandSeparatorComponent,
    CommandShortcutComponent,
    ContextMenuComponent,
    ContextMenuTriggerDirective,
    ContextMenuContentComponent,
    ContextMenuItemComponent,
    ContextMenuCheckboxItemComponent,
    ContextMenuRadioGroupComponent,
    ContextMenuRadioItemComponent,
    ContextMenuLabelComponent,
    ContextMenuSeparatorComponent,
    ContextMenuShortcutComponent,
    ContextMenuSubComponent,
    ContextMenuSubTriggerComponent,
    ContextMenuSubContentComponent,
    FormsModule
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
  
  // Checkbox demo states
  termsAccepted = false;
  marketingAccepted = true;
  securityAlerts = false;

  task = signal({
    name: 'Select All',
    completed: false,
    subtasks: [
      { name: 'Task 1', completed: false },
      { name: 'Task 2', completed: false },
      { name: 'Task 3', completed: false },
    ],
  });

  allComplete = signal(false);
  
  updateAllComplete() {
    const task = this.task();
    this.allComplete.set(task.subtasks != null && task.subtasks.every(t => t.completed));
  }

  someComplete(): boolean {
    const task = this.task();
    if (task.subtasks == null) {
      return false;
    }
    return task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete();
  }

  setAll(completed: boolean) {
    const task = this.task();
    this.allComplete.set(completed);
    if (task.subtasks == null) {
      return;
    }
    task.subtasks.forEach(t => (t.completed = completed));
    this.task.set({...task});
  }

  setSubtask(index: number, completed: boolean) {
    const task = this.task();
    const subtasks = task.subtasks.map((subtask, subtaskIndex) =>
      subtaskIndex === index ? { ...subtask, completed } : subtask
    );

    this.task.set({ ...task, subtasks });
    this.updateAllComplete();
  }

  // Combobox demo states
  selectedFramework = signal('');
  selectedStatus = signal('');
  selectedLanguage = signal('');

  frameworks = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
  ];

  statuses = [
    { value: 'backlog', label: 'Backlog' },
    { value: 'todo', label: 'Todo' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
    { value: 'canceled', label: 'Canceled' },
  ];

  languages = [
    { value: 'en', label: 'English', group: 'Popular' },
    { value: 'es', label: 'Spanish', group: 'Popular' },
    { value: 'fr', label: 'French', group: 'Popular' },
    { value: 'de', label: 'German', group: 'European' },
    { value: 'it', label: 'Italian', group: 'European' },
    { value: 'pt', label: 'Portuguese', group: 'European' },
    { value: 'zh', label: 'Chinese', group: 'Asian' },
    { value: 'ja', label: 'Japanese', group: 'Asian' },
    { value: 'ko', label: 'Korean', group: 'Asian' },
  ];

  getLanguagesByGroup(group: string) {
    return this.languages.filter(lang => lang.group === group);
  }

  getSelectedLabel(value: string, options: { value: string; label: string }[]) {
    const option = options.find(opt => opt.value === value);
    return option ? option.label : '';
  }

  getSelectedFrameworkLabel() {
    const fw = this.frameworks.find(f => f.value === this.selectedFramework());
    return fw ? fw.label : '';
  }

  mixedItems = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: null, label: 'None' },
    { value: 'option3', label: 'Option 3' },
  ];

  selectedMixedValue = signal('');

  commandAction = signal('No action selected');
  showBookmarksBar = signal(true);
  showFullUrls = signal(false);
  selectedPerson = signal('pedro');

  runCommand(command: string) {
    this.commandAction.set(command);
  }

  toggleBookmarksBar() {
    this.showBookmarksBar.update((value) => !value);
  }

  toggleFullUrls() {
    this.showFullUrls.update((value) => !value);
  }

  selectPerson(person: string) {
    this.selectedPerson.set(person);
  }

  getSelectedMixedLabel() {
    const item = this.mixedItems.find(i => i.value === this.selectedMixedValue());
    return item ? item.label : '';
  }
}

