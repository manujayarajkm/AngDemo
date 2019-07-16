import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LaunchComponent } from "./components/launch/launch.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: LaunchComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
