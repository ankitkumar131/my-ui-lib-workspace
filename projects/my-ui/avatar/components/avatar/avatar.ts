import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
  standalone: true,
})
export class AvatarComponent {
  @HostBinding('attr.data-slot') dataSlot = 'avatar';
}
