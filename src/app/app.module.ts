import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {AgrementComponent} from "./Agrement/Agrement.component";
import {AgrementMockService} from './Agrement/Agrement.mock.service';
import {Agrement} from "./shared/Agrement";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import {AgrementObtenuComponent} from "./AgrementObtenu/AgrementObtenu.component";
import {Canton} from "./shared/Canton";
import {CantonComponent} from "./Canton/Canton.component";
import {CommuneComponent} from "./Commune/Commune.component";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AgrementComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    MenuComponent,
    AgrementObtenuComponent,
    CantonComponent,
    CommuneComponent

  ],
  imports: [
    BrowserModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
