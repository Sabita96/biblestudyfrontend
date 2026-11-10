import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TopicListingComponent } from './topic-listing/topic-listing.component';
import { AddEditTopicComponent } from './add-edit-topic/add-edit-topic.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TopicListingComponent },
      { path: 'add', component: AddEditTopicComponent },
      { path: 'edit/:id', component: AddEditTopicComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicRoutingModule {}
