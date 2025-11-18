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
    ButtonGroup
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-ui-lib-workspace');
  protected readonly AccordionType = AccordionType;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonSize = ButtonSize;
}