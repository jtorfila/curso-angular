import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

import { environment } from '../environments/environment';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Componentes
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

// Servicios
import { ChatService } from "../app/providers/chat.service";

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule
  ],
  declarations: [AppComponent, ChatComponent, LoginComponent],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }