import { NgModule } from '@angular/core';
import { AvatarComponent } from './components/avatar/avatar';
import { AvatarImageComponent } from './components/avatar-image/avatar-image';
import { AvatarFallbackComponent } from './components/avatar-fallback/avatar-fallback';

@NgModule({
    imports: [
        AvatarComponent,
        AvatarImageComponent,
        AvatarFallbackComponent
    ],
    exports: [
        AvatarComponent,
        AvatarImageComponent,
        AvatarFallbackComponent
    ]
})
export class AvatarModule { }
