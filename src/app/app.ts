import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionType
} from '@my-ui/accordion';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-ui-lib-workspace');
  protected readonly AccordionType = AccordionType;
}
