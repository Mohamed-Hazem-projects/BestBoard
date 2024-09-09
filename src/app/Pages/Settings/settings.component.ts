import { Component } from '@angular/core';
import { MyHeaderComponent } from '../../Utility/my-header/my-header.component';
import { WrapperComponent } from '../../Utility/wrapper/wrapper.component';
import { ToggleSwitchComponent } from '../../Utility/toggle-switch/toggle-switch.component';
import { ControlComponent } from '../../Widgets/control/control.component';
import { GeneralInfoComponent } from '../../Widgets/info/info.component';
import { WidgetAppearDirective } from '../../Directives/widgetAppear.directive';
import { SecurityInfoComponent } from '../../Widgets/security-info/security-info.component';
import { SocialMediaSettingsComponent } from '../../Widgets/social-media-settings/social-media-settings.component';
import { WidgetsControlComponent } from '../../Widgets/widgets-control/widgets-control.component';
import { BackupsComponent } from '../../Widgets/backup/backup.component';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    MyHeaderComponent,
    WrapperComponent,
    ControlComponent,
    GeneralInfoComponent,
    WidgetAppearDirective,
    SecurityInfoComponent,
    SocialMediaSettingsComponent,
    WidgetsControlComponent,
    BackupsComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
