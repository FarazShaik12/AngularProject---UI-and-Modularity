import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',

    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  {
    path: 'profile',

    loadChildren: () =>
      import('./profile/profile.module').then((n) => n.ProfileModule),
  },

  {
    path: 'post',

    loadChildren: () => import('./post/post.module').then((p) => p.PostModule),
  },

  {
    path: 'comments',

    loadChildren: () =>
      import('./comment/comment.module').then((c) => c.CommentModule),
  },

  {
    path: 'dashboard',

    loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
