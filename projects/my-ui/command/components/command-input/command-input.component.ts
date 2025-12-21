import { Component, Output, EventEmitter, Input, inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommandComponent } from '../command/command.component';

@Component({
  selector: 'ui-command-input',
  templateUrl: './command-input.component.html',
  styleUrls: ['./command-input.component.scss'],
  standalone: true,
  imports: []
})
export class CommandInputComponent implements AfterViewInit {
  @Input() placeholder: string = 'Type a command or search...';
  @Input() autoFocus: boolean = true;
  
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;
  
  protected command = inject(CommandComponent, { optional: true });
  
  ngAfterViewInit() {
    if (this.autoFocus && this.inputElement) {
      setTimeout(() => {
        this.inputElement.nativeElement.focus();
      }, 0);
    }
  }
  
  get searchValue(): string {
    return this.command?.searchQuery() || '';
  }
  
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.command?.updateSearch(value);
  }
}
