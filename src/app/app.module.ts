import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HeaderComponent } from './header/header.component';
import { ActionbtnComponent } from './actionbtn/actionbtn.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { PlayerActionComponent } from './actionbtn/player-action/player-action.component';
import { GameActionComponent } from './actionbtn/game-action/game-action.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    HeaderComponent,
    ActionbtnComponent,
    TestcompComponent,
    PlayerActionComponent,
    GameActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
