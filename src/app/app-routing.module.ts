import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { EventBookingsComponent } from './pages/event-bookings/event-bookings.component';
import { EventListComponent } from './pages/event-list/event-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'my-bookings',
    component: MyBookingsComponent
  },
  {
    path: 'new-event',
    component: NewEventComponent
  },
  {
    path: 'event-list',
    component: EventListComponent
  },
  {
    path: 'event-bookings',
    component: EventBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
