import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionType
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
  AlertDialogTriggerComponent
} from '@my-ui/alert-dialog';
import {
  AlertComponent,
  AlertTitleComponent,
  AlertDescriptionComponent,
  AlertVariant
} from '@my-ui/alert';
import {
  AvatarComponent,
  AvatarImageComponent,
  AvatarFallbackComponent
} from '@my-ui/avatar';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
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
    AvatarFallbackComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-ui-lib-workspace');
  protected readonly AccordionType = AccordionType;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonSize = ButtonSize;
  protected readonly AlertVariant = AlertVariant;
}