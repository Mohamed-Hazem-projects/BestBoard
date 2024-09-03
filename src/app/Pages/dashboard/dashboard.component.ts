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
import { TopSearchComponent } from '../../Widgets/top-search/top-search.component';
import { UploadsComponent } from '../../Widgets/uploads/uploads.component';
import { CurrentProjectComponent } from '../../Widgets/current-project/current-project.component';
import { RemindersComponent } from '../../Widgets/reminders/reminders.component';
import { PostsComponent } from '../../Widgets/posts/posts.component';
import { SocialMediaComponent } from '../../Widgets/social-media/social-media.component';
import { ProjectsComponent } from '../../Widgets/projects/projects.component';

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
    , TopSearchComponent
    , UploadsComponent
    , CurrentProjectComponent
    , RemindersComponent
    , PostsComponent
    , SocialMediaComponent
    , ProjectsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
