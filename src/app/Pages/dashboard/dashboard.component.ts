import { Component } from '@angular/core';
import { MyHeaderComponent } from '../../Utility/my-header/my-header.component';
import { WrapperComponent } from '../../Utility/wrapper/wrapper.component';
import { WelcomeComponent } from '../../Widgets/Welcome/welcome.component';
import { DraftComponent } from '../../Widgets/draft/draft.component';
import { TargetsComponent } from '../../Widgets/targets/targets.component';
import { TicketsComponent } from '../../Widgets/tickets/tickets.component';
import { NewsComponent } from '../../Widgets/news/news.component';
import { TasksComponent } from '../../Widgets/tasks/tasks.component';
import { WidgetAppearDirective } from '../../Directives/widgetAppear.directive';

@Component({
  selector: 'dashboard-home',
  standalone: true,
  imports: [
    MyHeaderComponent
    , WrapperComponent
    , WelcomeComponent
    , DraftComponent
    , TargetsComponent
    , TicketsComponent
    , NewsComponent
    , TasksComponent
    , WidgetAppearDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
